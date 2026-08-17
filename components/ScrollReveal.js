'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function animateCounter(el) {
  if (el.dataset.animated === 'true') return;
  el.dataset.animated = 'true';
  
  const target = parseInt(el.dataset.target, 10);
  if (isNaN(target)) return;
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 1400;
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const currentVal = Math.round(eased * target);
    el.textContent = `${prefix}${currentVal.toLocaleString()}${suffix}`;
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-run observer whenever route changes
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, [data-target]');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Find counters inside or on the element itself
            if (entry.target.hasAttribute('data-target')) {
              animateCounter(entry.target);
            }
            entry.target.querySelectorAll('[data-target]').forEach((counter) => {
              animateCounter(counter);
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LegacyInteractions() {
  const router = useRouter();

  useEffect(() => {
    function handleClick(event) {
      const routeTarget = event.target.closest('[data-route]');
      if (routeTarget) {
        event.preventDefault();
        router.push(routeTarget.dataset.route);
        return;
      }

      const serviceTarget = event.target.closest('[data-service]');
      if (serviceTarget) {
        event.preventDefault();
        document.querySelector(serviceTarget.dataset.service)?.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      const moreTarget = event.target.closest('[data-toggle-more]');
      if (moreTarget) {
        const content = moreTarget.previousElementSibling;
        if (!content) return;
        const expanded = content.hidden;
        content.hidden = !expanded;
        moreTarget.textContent = expanded ? 'View Less' : 'View More';
        return;
      }

      const scrollTarget = event.target.closest('[data-scroll-target]');
      if (scrollTarget) {
        event.preventDefault();
        document.querySelector(scrollTarget.dataset.scrollTarget)?.scrollIntoView({ behavior: 'smooth' });
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [router]);

  return null;
}
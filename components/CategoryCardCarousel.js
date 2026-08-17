'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CategoryCardCarousel({ slides = [], interval = 3200 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides.length || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  if (!slides.length) return null;

  return (
    <div className="category-card-carousel">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`carousel-slide ${idx === current ? 'active' : ''}`}
          aria-hidden={idx !== current}
        >
          <Image
            src={slide.img}
            alt={slide.caption || 'Service preview'}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="carousel-slide-img"
          />
          <div className="carousel-slide-caption">{slide.caption}</div>
        </div>
      ))}
      {slides.length > 1 && (
        <div className="carousel-dots-indicator" aria-hidden="true">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`carousel-dot ${idx === current ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(idx);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

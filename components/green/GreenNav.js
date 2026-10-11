'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function GreenNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bagCount, setBagCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#faf9f5]/90 backdrop-blur-md border-b border-[#141c18]/10 py-4 shadow-sm'
          : 'bg-transparent py-6 lg:py-8'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Secondary Nav (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-medium text-[#141c18]/70">
          <a
            href="#collections"
            className="hover:text-[#141c18] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#141c18] after:transition-all after:duration-300"
          >
            Collections
          </a>
          <a
            href="#about"
            className="hover:text-[#141c18] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#141c18] after:transition-all after:duration-300"
          >
            About
          </a>
          <a
            href="#products"
            className="hover:text-[#141c18] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#141c18] after:transition-all after:duration-300"
          >
            Editions
          </a>
          <a
            href="#manifesto"
            className="hover:text-[#141c18] transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#141c18] after:transition-all after:duration-300"
          >
            Manifesto
          </a>
        </nav>

        {/* Center: Brand Identity */}
        <div className="text-center">
          <Link
            href="/green"
            className="group inline-flex flex-col items-center focus:outline-none"
            aria-label="GREEN Home"
          >
            <span className="text-2xl sm:text-3xl font-light tracking-[0.38em] text-[#141c18] uppercase transition-opacity duration-300 group-hover:opacity-80">
              GREEN
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#141c18]/50 mt-0.5">
              Atelier &bull; Edition 2026
            </span>
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-6 text-xs uppercase tracking-[0.18em] font-medium text-[#141c18]/70">
          <a
            href="#newsletter"
            className="hidden sm:inline-block hover:text-[#141c18] transition-colors"
          >
            Dispatches
          </a>
          
          <button
            type="button"
            onClick={() => setBagCount((prev) => prev + 1)}
            className="flex items-center space-x-1.5 hover:text-[#141c18] transition-colors focus:outline-none"
            aria-label={`Shopping bag with ${bagCount} items`}
          >
            <span>Bag</span>
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#263b31] text-[#faf9f5] text-[10px] leading-none">
              {bagCount}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 -mr-1.5 text-[#141c18] hover:opacity-75 focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-[#faf9f5] z-40 px-6 py-10 flex flex-col justify-between border-t border-[#141c18]/10 animate-fade-in">
          <nav className="flex flex-col space-y-6 text-xl tracking-[0.2em] uppercase font-light text-[#141c18]">
            <a
              href="#collections"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:translate-x-2 transition-transform duration-200"
            >
              01 &mdash; Collections
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:translate-x-2 transition-transform duration-200"
            >
              02 &mdash; About Green
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:translate-x-2 transition-transform duration-200"
            >
              03 &mdash; Featured Pieces
            </a>
            <a
              href="#manifesto"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:translate-x-2 transition-transform duration-200"
            >
              04 &mdash; The Manifesto
            </a>
            <a
              href="#benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:translate-x-2 transition-transform duration-200"
            >
              05 &mdash; Principles
            </a>
            <a
              href="#newsletter"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:translate-x-2 transition-transform duration-200"
            >
              06 &mdash; Dispatches
            </a>
          </nav>

          <div className="pt-8 border-t border-[#141c18]/10 text-xs uppercase tracking-[0.25em] text-[#141c18]/60 flex justify-between">
            <span>Copenhagen / Paris</span>
            <span>Est. 2026</span>
          </div>
        </div>
      )}
    </header>
  );
}

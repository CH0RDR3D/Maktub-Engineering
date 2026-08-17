'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { navItems } from '../lib/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      // Find the hero or top section on the active page
      const heroEl = document.querySelector('.hero-section, .page-hero-header, .ge-hero-section, #home');
      const threshold = heroEl
        ? Math.max(heroEl.offsetHeight - 90, 200)
        : window.innerHeight * 0.7;

      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={`site-header-wrap ${scrolled ? 'is-scrolled' : ''}`}>
      <nav id="navbar" className="navbar" aria-label="Main Navigation">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" aria-label="Maktub Engineering Home">
            <div className="nav-logo-icon">
              <Image
                src="/images/maktub-logo.png"
                alt="Maktub Engineering Logo"
                width={40}
                height={40}
                priority
              />
            </div>
            <div className="nav-logo-copy">
              <span className="nav-logo-title">Maktub Engineering</span>
              <span className="nav-logo-sub">&amp; General Supply Limited</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions: Theme Toggle & Quote CTA */}
          <div className="nav-actions">

            <Link href="/contact" className="nav-cta-btn">
              <span>Get a Quote</span>
              <i className="ti ti-arrow-right" aria-hidden="true" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              className={`hamburger ${menuOpen ? 'active' : ''}`}
              type="button"
              aria-label={menuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={menuOpen}
              aria-controls="mobileMenu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="ham-bar" />
              <span className="ham-bar" />
              <span className="ham-bar" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`mobile-menu-drawer ${menuOpen ? 'open' : ''}`}
        id="mobileMenu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="mobile-menu-header">
          <div className="mobile-logo-wrap">
            <Image
              src="/images/maktub-logo.png"
              alt="Maktub Engineering Logo"
              width={34}
              height={34}
            />
            <span className="mobile-logo-text">Maktub Engineering</span>
          </div>
          <button
            type="button"
            className="mobile-close-btn"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <i className="ti ti-x" aria-hidden="true" />
          </button>
        </div>

        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-link ${isActive(item.href) ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              <span>{item.label}</span>
              <i className="ti ti-chevron-right" aria-hidden="true" />
            </Link>
          ))}
        </div>

        <div className="mobile-menu-footer">
          <div className="mobile-theme-row">
            <span>Appearance</span>
            <ThemeToggle />
          </div>
          <Link
            href="/contact"
            className="mobile-cta-btn"
            onClick={() => setMenuOpen(false)}
          >
            <i className="ti ti-mail" aria-hidden="true" /> Get In Touch
          </Link>
          <div className="mobile-contact-quick">
            <a href="tel:+260978294747">
              <i className="ti ti-phone" aria-hidden="true" /> +260 978 294 747
            </a>
            <a href="mailto:info@maktubengineering.com">
              <i className="ti ti-mail" aria-hidden="true" /> info@maktubengineering.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

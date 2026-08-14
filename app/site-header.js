'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { navigationLinks } from './navigation';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setOpen(false);
  }

  function isCurrentRoute(href) {
    return href === '/' ? pathname === href : pathname.startsWith(href);
  }

  function renderLink([label, href]) {
    const current = isCurrentRoute(href);
    return (
      <Link
        key={href}
        href={href}
        onClick={closeMenu}
        aria-current={current ? 'page' : undefined}
      >
        {label}
      </Link>
    );
  }

  return (
    <header>
      <nav id="navbar" aria-label="Primary navigation">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" onClick={closeMenu}>
            <span className="nav-logo-icon">
              <img src="/images/maktub-logo.png" alt="Maktub Engineering logo" width="38" height="38" />
            </span>
            <span>
              <span className="nav-logo-text">Maktub Engineering</span>
              <span className="nav-logo-sub">&amp; General Supply Limited</span>
            </span>
          </Link>
          <div className="nav-links">
            {navigationLinks.map(renderLink)}
          </div>
          <button
            className="hamburger"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobileMenu"
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true">{open ? '×' : '☰'}</span>
          </button>
        </div>
      </nav>
      <nav
        className={`mobile-menu${open ? ' open' : ''}`}
        id="mobileMenu"
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {navigationLinks.map(renderLink)}
      </nav>
    </header>
  );
}

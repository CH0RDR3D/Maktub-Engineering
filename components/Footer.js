'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navItems } from '../lib/navigation';

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer border-t border-[#141c18]/15 dark:border-white/15 bg-[#faf9f5] dark:bg-[#0a0f0d] text-[#141c18] dark:text-white pt-20 pb-12">
      <div className="section-inner footer-inner max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#141c18]/15 dark:border-white/15">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-4 space-y-6">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#059669] dark:text-[#34d399]">
              [ 01 / PROFILE ]
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src="/images/maktub-logo.png"
                alt="Maktub Engineering Logo"
                width={42}
                height={42}
                className="shrink-0"
              />
              <div>
                <div className="text-lg font-bold uppercase tracking-tight font-editorial-display leading-tight">
                  Maktub Engineering
                </div>
                <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#141c18]/60 dark:text-white/60">
                  &amp; General Supply Limited
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#141c18]/70 dark:text-white/70 font-light leading-relaxed max-w-sm">
              Empowering your vision by helping you to build stronger structures. Proudly Zambian-owned, delivering civil engineering excellence, heavy equipment, and dependable general supplies nationwide since January 2020.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em] border border-[#141c18]/20 dark:border-white/20">
                PACRA 120200000224
              </span>
              <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em] border border-[#141c18]/20 dark:border-white/20">
                EIZ Class C2
              </span>
              <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em] border border-[#141c18]/20 dark:border-white/20">
                NCC Grade 5
              </span>
              <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em] border border-[#141c18]/20 dark:border-white/20">
                ZPPA Approved
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#141c18]/50 dark:text-white/50">
              [ 02 / NAVIGATION ]
            </div>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-[0.18em]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#059669] dark:hover:text-[#34d399] transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services & Solutions */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#141c18]/50 dark:text-white/50">
              [ 03 / EXPERTISE ]
            </div>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-[0.18em] text-[#141c18]/80 dark:text-white/80">
              <li>
                <Link
                  href="/services#services-section-civil"
                  className="hover:text-[#059669] dark:hover:text-[#34d399] transition-colors inline-block"
                >
                  Civil Engineering &amp; Roads
                </Link>
              </li>
              <li>
                <Link
                  href="/services#services-section-equipment"
                  className="hover:text-[#059669] dark:hover:text-[#34d399] transition-colors inline-block"
                >
                  Heavy Equipment Supplies
                </Link>
              </li>
              <li>
                <Link
                  href="/services#services-section-general"
                  className="hover:text-[#059669] dark:hover:text-[#34d399] transition-colors inline-block"
                >
                  Corporate Supplies &amp; PPE
                </Link>
              </li>
              <li>
                <Link
                  href="/green-energy"
                  className="hover:text-[#059669] dark:hover:text-[#34d399] transition-colors inline-block text-[#059669] dark:text-[#34d399]"
                >
                  Green Energy &amp; Solar &rarr;
                </Link>
              </li>
              <li>
                <Link
                  href="/credentials"
                  className="hover:text-[#059669] dark:hover:text-[#34d399] transition-colors inline-block"
                >
                  Certifications &amp; Licenses
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#141c18]/50 dark:text-white/50">
              [ 04 / LOCATIONS ]
            </div>
            <div className="space-y-3 text-xs font-light text-[#141c18]/80 dark:text-white/80">
              <div>
                <span className="font-mono uppercase tracking-wider block text-[10px] text-[#059669] dark:text-[#34d399]">
                  Lusaka Head Office
                </span>
                <p>Woodgate House ZSIC, Floor 6, Room 1, Cairo Road, Lusaka</p>
              </div>

              <div>
                <span className="font-mono uppercase tracking-wider block text-[10px] text-[#059669] dark:text-[#34d399]">
                  Muchinga Provincial Branch
                </span>
                <p>Chalabesa Kanchibiya Area, Muchinga Province</p>
              </div>

              <div className="pt-2 font-mono uppercase text-[11px] space-y-1">
                <div>
                  <a href="tel:+260978294747" className="hover:underline">
                    +260 978 294 747
                  </a>
                </div>
                <div>
                  <a href="mailto:info@maktubengineering.com" className="hover:underline">
                    info@maktubengineering.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-[#141c18]/60 dark:text-white/60 gap-4">
          <div className="flex items-center space-x-4">
            <span>&copy; {currentYear} Maktub Engineering. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <span>TPIN: 2558884909</span>
            <span>Lusaka, Zambia</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-[#059669] dark:hover:text-[#34d399] transition-colors inline-flex items-center space-x-1 focus:outline-none"
              aria-label="Back to top of page"
            >
              <span>Top</span>
              <span>&uarr;</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

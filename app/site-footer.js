import Link from 'next/link';

import { navigationLinks } from './navigation';

export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <div className="footer-logo-mark">
                <img src="/images/maktub-logo.png" alt="Maktub Engineering logo" width="36" height="36" loading="lazy" />
              </div>
              <div>
                <div className="footer-logo-name">Maktub Engineering</div>
                <div className="footer-logo-sub">&amp; General Supply Limited</div>
              </div>
            </div>
            <p className="footer-tagline">
              Empowering your vision by helping you to build stronger structures. Proudly Zambian-owned since January 2020.
            </p>
          </div>
          <div>
            <div className="footer-heading">Navigation</div>
            <ul className="footer-links">
              {navigationLinks.map(([label, href]) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-heading">Contact</div>
            <div className="footer-contact-item">
              <i className="ti ti-phone" aria-hidden="true" />
              <span><a href="tel:+260978294747">+260 978 294 747</a> / <a href="tel:+260966363525">+260 966 363 525</a></span>
            </div>
            <div className="footer-contact-item">
              <i className="ti ti-mail" aria-hidden="true" />
              <span><a href="mailto:info@maktubengineering.com">info@maktubengineering.com</a></span>
            </div>
            <div className="footer-contact-item">
              <i className="ti ti-map-pin" aria-hidden="true" />
              <span>Woodgate House ZSIC, Floor 6, Suite 1, Nairobi Place, Cairo Road, Lusaka - Zambia</span>
            </div>
            <div className="footer-banking">
              <div className="footer-heading">Banking</div>
              <div className="footer-contact-item"><i className="ti ti-building-bank" aria-hidden="true" /><span>Stanbic Bank &mdash; A/C 9130007017573 (ZMW)</span></div>
              <div className="footer-contact-item"><i className="ti ti-building-bank" aria-hidden="true" /><span>Access Bank &mdash; A/C 0080170000251 (ZMW)</span></div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">&copy; 2026 Maktub Engineering &amp; General Supply Limited. All rights reserved.</div>
          <div className="footer-reg">Reg No. 120200000224 &middot; TPIN 2558884909</div>
        </div>
        <div className="footer-copy">designed by BLACK &middot; Inc</div>
      </div>
    </footer>
  );
}

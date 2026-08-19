import Link from 'next/link';
import Image from 'next/image';
import { navItems } from '../lib/navigation';
import ThemeToggle from './ThemeToggle';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top-accent" />
      <div className="section-inner footer-inner">
        <div className="footer-grid">
          {/* Col 1: Brand & Mission */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <Image
                src="/images/maktub-logo.png"
                alt="Maktub Engineering Logo"
                width={42}
                height={42}
                className="footer-logo-img"
              />
              <div>
                <div className="footer-brand-name">Maktub Engineering</div>
                <div className="footer-brand-sub">&amp; General Supply Limited</div>
              </div>
            </div>
            <p className="footer-desc">
              Empowering your vision by helping you to build stronger structures. Proudly Zambian-owned, delivering civil engineering excellence, heavy equipment, and dependable general supplies nationwide since January 2020.
            </p>
            <div className="footer-compliance-badges">
              <span className="footer-badge">PACRA Registered</span>
              <span className="footer-badge">EIZ Class C2</span>
              <span className="footer-badge">NCC Grade 5</span>
              <span className="footer-badge">ZPPA Approved</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-links-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-nav-link">
                    <i className="ti ti-chevron-right footer-link-icon" aria-hidden="true" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services & Solutions */}
          <div className="footer-services-col">
            <h3 className="footer-heading">Our Expertise</h3>
            <ul className="footer-links-list">
              <li>
                <Link href="/services#services-section-civil" className="footer-nav-link">
                  <i className="ti ti-building" aria-hidden="true" />
                  <span>Civil Engineering &amp; Roads</span>
                </Link>
              </li>
              <li>
                <Link href="/services#services-section-equipment" className="footer-nav-link">
                  <i className="ti ti-crane" aria-hidden="true" />
                  <span>Equipment Supply &amp; Servicing</span>
                </Link>
              </li>
              <li>
                <Link href="/services#services-section-general" className="footer-nav-link">
                  <i className="ti ti-shopping-bag" aria-hidden="true" />
                  <span>Office, School &amp; PPE Supplies</span>
                </Link>
              </li>
              <li>
                <Link href="/green-energy" className="footer-nav-link">
                  <i className="ti ti-leaf" aria-hidden="true" />
                  <span>Solar &amp; Green Energy</span>
                </Link>
              </li>
              <li>
                <Link href="/credentials" className="footer-nav-link">
                  <i className="ti ti-certificate" aria-hidden="true" />
                  <span>Certifications &amp; Licenses</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div className="footer-contact-col">
            <h3 className="footer-heading">Contact &amp; Banking</h3>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <i className="ti ti-phone" aria-hidden="true" />
                <div>
                  <a href="tel:+260978294747">+260-978-294-747</a> / <a href="tel:+260966363525">+260-966-363-525</a>
                </div>
              </div>

              <div className="footer-contact-item">
                <i className="ti ti-mail" aria-hidden="true" />
                <div>
                  <a href="mailto:info@maktubengineering.com">maktubengineering@gmail.com</a>
                </div>
              </div>

              <div className="footer-contact-item">
                <i className="ti ti-map-pin" aria-hidden="true" />
                <div>
                  <strong>Lusaka HQ:</strong> Woodgate House ZSIC, Floor 6, Room 1, Cairo Road, Lusaka
                </div>
              </div>


              <div className="footer-contact-item">
                <i className="ti ti-map-pin" aria-hidden="true" />
                <div>
                  <strong>Muchinga:</strong> Chalabesa Kanchibiya Area, Muchinga Province
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <ThemeToggle />
          <div className="footer-copyright">
            &copy; {currentYear} Maktub Engineering &amp; General Supply Limited. All rights reserved.
          </div>
          <div className="footer-legal">
            <span>Reg No: <strong>120200000224</strong></span>
            <span className="dot-divider">&middot;</span>
            <span>TPIN: <strong>2558884909</strong></span>
            <span className="dot-divider">&middot;</span>
            <span>Lusaka, Zambia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

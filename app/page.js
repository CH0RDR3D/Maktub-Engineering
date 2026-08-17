import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import ServicesCarousel from '../components/ServicesCarousel';

export const metadata = {
  title: 'Engineering, Construction & General Supply in Zambia',
  description: 'Maktub Engineering & General Supply Limited delivers civil construction, heavy equipment, green energy, and general supply solutions across Zambia.',
  alternates: { canonical: '/' }
};

export default function HomePage() {
  return (
    <div className="home-page-container">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. STATS BAR */}
      <StatsBar
        items={[
          { target: 5, suffix: '+', label: 'Years in Business', icon: 'ti ti-calendar' },
          { target: 3, suffix: '', label: 'Service Divisions', icon: 'ti ti-tool' },
          { target: 8, suffix: '+', label: 'Accreditations & Licenses', icon: 'ti ti-certificate' },
          { target: 2, suffix: '', label: 'Provincial Branches', icon: 'ti ti-map-pin' }
        ]}
      />

      {/* 3. FEATURED SERVICES CAROUSEL */}
      <section className="section-padding">
        <div className="section-inner">
          <div className="section-header-center reveal">
            <span className="section-badge">
              <i className="ti ti-flame" aria-hidden="true" /> Core Capabilities
            </span>
            <h2 className="section-title">
              Featured <span>Services &amp; Supplies</span>
            </h2>
            <p className="section-subtitle">
              From full-scale commercial civil construction and machinery procurement to corporate supplies and certified safety wear.
            </p>
          </div>

          <div className="reveal">
            <ServicesCarousel />
          </div>

          <div className="carousel-cta-row reveal">
            <Link href="/services" className="btn-secondary-modern">
              <span>View All Services &amp; Specifications</span>
              <i className="ti ti-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHO WE ARE */}
      <section className="section-padding section-alt-bg">
        <div className="section-inner">
          <div className="two-col-grid">
            <div className="col-content reveal-left">
              <span className="section-badge">
                <i className="ti ti-shield-check" aria-hidden="true" /> Who We Are
              </span>
              <h2 className="section-title">
                A <span>Zambian-Owned</span> Partner You Can Trust
              </h2>
              <p className="section-lead-text">
                Maktub Engineering &amp; General Supply Limited is a fully registered, citizen-owned enterprise delivering integrated engineering solutions and dependable supply services to both public and private sector clients across Zambia.
              </p>
              <p className="section-body-text">
                Since our incorporation in January 2020, we have grown to handle multi-disciplinary infrastructure works, government contracts, defense procurement clearances, and high-volume corporate logistics with unwavering commitment to quality and safety.
              </p>

              <div className="feature-bullets-grid">
                <div className="feature-bullet-item">
                  <i className="ti ti-check" aria-hidden="true" />
                  <span>Grade 5 NCC Certified Contractor</span>
                </div>
                <div className="feature-bullet-item">
                  <i className="ti ti-check" aria-hidden="true" />
                  <span>Licensed by Engineering Institute of Zambia</span>
                </div>
                <div className="feature-bullet-item">
                  <i className="ti ti-check" aria-hidden="true" />
                  <span>Cleared Ministry of Defence Vendor</span>
                </div>
                <div className="feature-bullet-item">
                  <i className="ti ti-check" aria-hidden="true" />
                  <span>ZPPA Registered &amp; CEEC Citizen Owned</span>
                </div>
              </div>

              <div className="action-row">
                <Link href="/about" className="btn-primary-modern">
                  <span>Learn More About Us</span>
                  <i className="ti ti-arrow-right" aria-hidden="true" />
                </Link>
                <Link href="/credentials" className="btn-ghost-modern">
                  <i className="ti ti-file-certificate" aria-hidden="true" />
                  <span>View Certifications</span>
                </Link>
              </div>
            </div>

            <div className="col-visual reveal-right">
              <div className="visual-card-wrap">
                <div className="visual-image-container">
                  <Image
                    src="/resources/equipment.webp"
                    alt="Maktub engineers and heavy equipment on site"
                    fill
                    sizes="(max-width: 768px) 100vw, 540px"
                    className="visual-img"
                  />
                  <div className="visual-card-badge">
                    <i className="ti ti-award" aria-hidden="true" />
                    <div>
                      <div className="badge-title">100% Zambian</div>
                      <div className="badge-sub">Incorporated Jan 2020</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEYOND CONSTRUCTION / GENERAL SUPPLIES */}
      <section className="section-padding">
        <div className="section-inner">
          <div className="two-col-grid rev">
            <div className="col-visual reveal-left">
              <div className="visual-card-wrap">
                <div className="visual-image-container">
                  <Image
                    src="/resources/civileng2.webp"
                    alt="Maktub supply chain, civil works and logistics"
                    fill
                    sizes="(max-width: 768px) 100vw, 540px"
                    className="visual-img"
                  />
                  <div className="visual-card-badge left-bottom">
                    <i className="ti ti-truck-delivery" aria-hidden="true" />
                    <div>
                      <div className="badge-title">Prompt Delivery</div>
                      <div className="badge-sub">Across All 10 Provinces</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-content reveal-right">
              <span className="section-badge">
                <i className="ti ti-truck" aria-hidden="true" /> Dependable Supply Chain
              </span>
              <h2 className="section-title">
                Beyond <span>Construction</span>
              </h2>
              <p className="section-lead-text">
                Our general supply division ensures your operations never skip a beat. We supply everything from high-grade structural building materials to turnkey office ergonomics, school desks, and lab fittings.
              </p>
              <p className="section-body-text">
                With warehouses and supply networks spanning Lusaka, the Copperbelt, and Muchinga Province, we provide dependable procurement for government ministries, NGOs, private corporations, and educational institutions.
              </p>

              <div className="supplies-chips-row">
                <span className="supply-chip"><i className="ti ti-armchair" /> Office Furniture</span>
                <span className="supply-chip"><i className="ti ti-printer" /> IT Equipment</span>
                <span className="supply-chip"><i className="ti ti-hard-hat" /> Certified PPE</span>
                <span className="supply-chip"><i className="ti ti-building-warehouse" /> Cement &amp; Steel</span>
                <span className="supply-chip"><i className="ti ti-tools" /> Hardware &amp; Tools</span>
              </div>

              <div className="action-row">
                <Link href="/contact" className="btn-primary-modern">
                  <i className="ti ti-message-dots" aria-hidden="true" />
                  <span>Discuss Your Supply Needs</span>
                </Link>
                <Link href="/services#services-section-general" className="btn-ghost-modern">
                  <span>Explore Supply Catalog</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GREEN ENERGY BANNER TEASER */}
      <section className="green-teaser-section reveal">
        <div className="section-inner">
          <div className="green-teaser-card">
            <div className="green-teaser-glow" aria-hidden="true" />
            <div className="green-teaser-content">
              <span className="green-badge">
                <i className="ti ti-leaf" aria-hidden="true" /> Sustainability Initiative
              </span>
              <h2 className="green-teaser-title">
                Powering a <span>Greener Zambia</span>
              </h2>
              <p className="green-teaser-text">
                Discover our turnkey solar installations, energy-efficient building designs, and eco-conscious construction practices aimed at lowering energy costs and building sustainable communities.
              </p>
              <div className="green-teaser-stats">
                <div className="green-stat">
                  <strong>500+ kW</strong>
                  <span>Solar Installed</span>
                </div>
                <div className="green-stat">
                  <strong>2,000+</strong>
                  <span>Trees Planted</span>
                </div>
                <div className="green-stat">
                  <strong>120 t</strong>
                  <span>CO₂ Offset</span>
                </div>
              </div>
            </div>
            <div className="green-teaser-actions">
              <Link href="/green-energy" className="btn-green-primary">
                <i className="ti ti-solar-panel" aria-hidden="true" />
                <span>Explore Green Energy</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAST CTA SECTION */}
      <section className="cta-banner-section section-padding">
        <div className="section-inner">
          <div className="cta-banner-box reveal">
            <div className="cta-banner-glow" aria-hidden="true" />
            <div className="cta-banner-text">
              <span className="section-badge light">Ready To Get Started?</span>
              <h2 className="cta-banner-title">
                Let&apos;s Build Something <span>Exceptional Together</span>
              </h2>
              <p className="cta-banner-sub">
                Contact our engineering and procurement specialists today for quotes, tender submissions, or project consultations.
              </p>
            </div>
            <div className="cta-banner-buttons">
              <Link href="/contact" className="btn-cta-primary">
                <i className="ti ti-mail" aria-hidden="true" />
                <span>Get a Free Quote</span>
              </Link>
              <a
                href="https://wa.me/260978294747"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-whatsapp"
              >
                <i className="ti ti-brand-whatsapp" aria-hidden="true" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

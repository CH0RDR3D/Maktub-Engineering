import Link from 'next/link';
import GreenEnergyClientHub from '../../components/GreenEnergyClientHub';

export const metadata = {
  title: 'Green Energy & Sustainable Energy Solutions',
  description:
    'Integrated green energy, solar PV installations, BESS battery storage, microgrids, industrial hybrid power, and EPC delivery across Zambia and Southern Africa.',
  alternates: { canonical: '/green-energy' },
  openGraph: {
    title: 'Green Energy & Sustainable Infrastructure | Maktub Engineering',
    description:
      'Powering a cleaner, more resilient and productive future. Integrated renewable power and energy infrastructure tailored for Zambia and regional African markets.'
  }
};

export default function GreenEnergyPage() {
  return (
    <div className="green-energy-page">
      {/* 1. GREEN HERO SECTION */}
      <section className="ge-hero-section">
        {/* Floating particles decoration */}
        <div className="ge-particles-wrap" aria-hidden="true">
          <span className="ge-particle" style={{ top: '20%', left: '10%', width: '18px', height: '18px', animationDelay: '0s' }} />
          <span className="ge-particle" style={{ top: '15%', left: '80%', width: '14px', height: '14px', animationDelay: '1.2s' }} />
          <span className="ge-particle" style={{ top: '70%', left: '55%', width: '22px', height: '22px', animationDelay: '0.6s' }} />
          <span className="ge-particle" style={{ top: '55%', left: '30%', width: '10px', height: '10px', animationDelay: '2s' }} />
          <span className="ge-particle" style={{ top: '60%', left: '90%', width: '16px', height: '16px', animationDelay: '1.5s' }} />
        </div>

        <div className="section-inner ge-hero-inner">
          <div className="ge-hero-badge reveal">
            <i className="ti ti-leaf" aria-hidden="true" /> Green Energy &amp; Sustainable Infrastructure Division
          </div>
          <h1 className="ge-hero-title reveal">
            Powering a Cleaner, More Resilient &amp; <span>Productive Future</span>
          </h1>
          <p className="ge-hero-subtitle reveal">
            Maktub Engineering &amp; General Supply Limited provides integrated green energy, renewable power, and sustainable infrastructure solutions designed to help governments, businesses, industries, institutions, and communities reduce energy costs, improve power reliability, and transition towards cleaner sources of energy.
          </p>

          <div className="ge-hero-actions reveal">
            <a href="#green-solutions-explorer" className="btn-green-primary">
              <i className="ti ti-layout-grid" aria-hidden="true" />
              <span>Explore 20 Green Energy Solutions</span>
            </a>
            <a href="#green-energy-quote" className="btn-green-outline">
              <i className="ti ti-calculator" aria-hidden="true" />
              <span>Request Technical Assessment</span>
            </a>
          </div>

          <div className="ge-hero-regional-tag reveal">
            <i className="ti ti-map-pin" /> Engineered for <strong>Zambia</strong> and the wider <strong>Southern &amp; Central African</strong> markets
          </div>
        </div>

        {/* SVG Wave Bottom Divider */}
        <div className="ge-wave-divider" aria-hidden="true">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="ge-wave-svg">
            <path
              d="M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,58.7C840,64,960,64,1080,56C1200,48,1320,32,1380,24L1440,16L1440,90L1380,90C1320,90,1200,90,1080,90C960,90,840,90,720,90C600,90,480,90,360,90C240,90,120,90,60,90L0,90Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* 2. GREEN STATS BAR */}
      <section className="ge-stats-wrapper" aria-label="Green Energy Impact Statistics">
        <div className="section-inner">
          <div className="ge-stats-grid">
            <div className="ge-stat-card reveal">
              <div className="ge-stat-icon-box">
                <i className="ti ti-solar-panel" aria-hidden="true" />
              </div>
              <div className="ge-stat-number" data-target="20" data-suffix=" Solutions">
                20
              </div>
              <div className="ge-stat-label">Integrated Energy Solutions</div>
            </div>

            <div className="ge-stat-card reveal">
              <div className="ge-stat-icon-box green">
                <i className="ti ti-battery-charging" aria-hidden="true" />
              </div>
              <div className="ge-stat-number" data-target="8" data-suffix=" Stages">
                8 Stages
              </div>
              <div className="ge-stat-label">Project Delivery Lifecycle</div>
            </div>

            <div className="ge-stat-card reveal">
              <div className="ge-stat-icon-box gold">
                <i className="ti ti-building-factory" aria-hidden="true" />
              </div>
              <div className="ge-stat-number" data-target="6" data-suffix=" Sectors">
                6+ Sectors
              </div>
              <div className="ge-stat-label">Mining, Commercial, Agri, Public</div>
            </div>

            <div className="ge-stat-card reveal">
              <div className="ge-stat-icon-box teal">
                <i className="ti ti-shield-check" aria-hidden="true" />
              </div>
              <div className="ge-stat-number" data-target="100" data-suffix="%">
                100%
              </div>
              <div className="ge-stat-label">ZESCO &amp; ERB Grid Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLIENT INTERACTIVE HUB (Filter Tabs, 20 Solutions, Stepper, Regulatory, Advisory, Quote) */}
      <GreenEnergyClientHub />
    </div>
  );
}

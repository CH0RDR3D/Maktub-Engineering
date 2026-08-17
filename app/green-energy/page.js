import Link from 'next/link';

export const metadata = {
  title: 'Green Energy & Sustainability',
  description: 'Maktub Engineering Green Energy division delivers turnkey solar installations, energy-efficient building designs, and environmental sustainability initiatives across Zambia.',
  alternates: { canonical: '/green-energy' }
};

export default function GreenEnergyPage() {
  return (
    <div className="green-energy-page">
      {/* 1. GREEN HERO */}
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
            <i className="ti ti-leaf" aria-hidden="true" /> Green Energy &amp; Sustainability Division
          </div>
          <h1 className="ge-hero-title reveal">
            Powering a <span>Greener Zambia</span>
          </h1>
          <p className="ge-hero-subtitle reveal">
            Maktub Engineering is committed to driving sustainable national development through high-efficiency solar photovoltaic installations, eco-conscious construction methods, and community green-earth initiatives.
          </p>

          <div className="ge-hero-actions reveal">
            <Link href="/contact" className="btn-green-primary">
              <i className="ti ti-solar-panel" aria-hidden="true" />
              <span>Get a Solar Quote</span>
            </Link>
            <a href="#solar-solutions" className="btn-green-outline">
              <i className="ti ti-arrow-down" aria-hidden="true" />
              <span>Explore Initiatives</span>
            </a>
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
              <div className="ge-stat-number" data-target="500" data-suffix=" kW">
                0 kW
              </div>
              <div className="ge-stat-label">Solar Capacity Installed</div>
            </div>

            <div className="ge-stat-card reveal">
              <div className="ge-stat-icon-box green">
                <i className="ti ti-trees" aria-hidden="true" />
              </div>
              <div className="ge-stat-number" data-target="2000" data-suffix="+">
                0+
              </div>
              <div className="ge-stat-label">Trees Planted Nationwide</div>
            </div>

            <div className="ge-stat-card reveal">
              <div className="ge-stat-icon-box gold">
                <i className="ti ti-cloud" aria-hidden="true" />
              </div>
              <div className="ge-stat-number" data-target="120" data-suffix=" t">
                0 t
              </div>
              <div className="ge-stat-label">CO₂ Offset (Metric Tonnes)</div>
            </div>

            <div className="ge-stat-card reveal">
              <div className="ge-stat-icon-box teal">
                <i className="ti ti-home-eco" aria-hidden="true" />
              </div>
              <div className="ge-stat-number" data-target="35" data-suffix="+">
                0+
              </div>
              <div className="ge-stat-label">Green Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOLAR ENERGY SOLUTIONS */}
      <section id="solar-solutions" className="section-padding">
        <div className="section-inner">
          <div className="two-col-grid">
            <div className="col-content reveal-left">
              <span className="section-badge green">
                <i className="ti ti-sun" aria-hidden="true" /> Solar Photovoltaic Systems
              </span>
              <h2 className="section-title">
                Harnessing the <span>Power of the Sun</span>
              </h2>
              <p className="section-lead-text">
                Zambia receives over 3,000 hours of peak sunlight per year — one of the richest renewable solar resources in Africa. Maktub Engineering engineers, supplies, and commissions turnkey solar installations.
              </p>

              <div className="ge-solution-list">
                <div className="ge-solution-item">
                  <div className="ge-sol-icon"><i className="ti ti-home-bolt" /></div>
                  <div>
                    <h3 className="ge-sol-title">Residential Solar Systems</h3>
                    <p className="ge-sol-desc">
                      Off-grid and grid-tied rooftop setups from 2kW starter kits to 20kW+ full-home battery-backed backup arrays, eliminating load-shedding headaches.
                    </p>
                  </div>
                </div>

                <div className="ge-solution-item">
                  <div className="ge-sol-icon"><i className="ti ti-building-community" /></div>
                  <div>
                    <h3 className="ge-sol-title">Commercial &amp; Industrial Solar</h3>
                    <p className="ge-sol-desc">
                      High-capacity solar arrays for factories, mining camps, corporate warehouses, schools, and hospitals with dramatic operational electricity cost reductions.
                    </p>
                  </div>
                </div>

                <div className="ge-solution-item">
                  <div className="ge-sol-icon"><i className="ti ti-droplet-bolt" /></div>
                  <div>
                    <h3 className="ge-sol-title">Solar Water Pumping &amp; Irrigation</h3>
                    <p className="ge-sol-desc">
                      Solar-powered borehole and agricultural pumping systems for farms, irrigation schemes, and rural community water points across Zambia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-visual reveal-right">
              <div className="ge-solar-graphic-box">
                <div className="solar-sun-glow" />
                <div className="solar-panel-grid-visual">
                  <div className="solar-cell" />
                  <div className="solar-cell" />
                  <div className="solar-cell" />
                  <div className="solar-cell" />
                  <div className="solar-cell" />
                  <div className="solar-cell" />
                  <div className="solar-cell" />
                  <div className="solar-cell" />
                  <div className="solar-cell" />
                </div>
                <div className="solar-caption-box">
                  <div className="solar-caption-title">High-Efficiency Tier-1 Panels</div>
                  <div className="solar-caption-sub">Grid-Tied &amp; Hybrid Battery Storage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GREEN EARTH PROGRAMMES */}
      <section className="section-padding section-alt-bg">
        <div className="section-inner">
          <div className="section-header-center reveal">
            <span className="section-badge green">
              <i className="ti ti-world" aria-hidden="true" /> Environmental Initiatives
            </span>
            <h2 className="section-title">
              Green <span>Earth Programmes</span>
            </h2>
            <p className="section-subtitle">
              Beyond solar installations, Maktub integrates eco-conscious practices across every civil and supply project.
            </p>
          </div>

          <div className="ge-initiatives-grid">
            {/* Card 1: Solar */}
            <div className="ge-init-card reveal">
              <div className="ge-init-header green-grad">
                <i className="ti ti-solar-panel" aria-hidden="true" />
              </div>
              <div className="ge-init-body">
                <h3 className="ge-init-title">Turnkey Solar Engineering</h3>
                <p className="ge-init-text">
                  Complete design, load sizing, procurement of Tier-1 solar modules and lithium battery banks, certified installation, and 24/7 remote monitoring.
                </p>
                <ul className="ge-init-checklist">
                  <li><i className="ti ti-check" /> Hybrid &amp; Off-grid battery setups</li>
                  <li><i className="ti ti-check" /> Smart inverter remote telemetrics</li>
                  <li><i className="ti ti-check" /> Full warranty &amp; periodic maintenance</li>
                </ul>
              </div>
            </div>

            {/* Card 2: Eco Construction */}
            <div className="ge-init-card reveal">
              <div className="ge-init-header gold-grad">
                <i className="ti ti-building-eco" aria-hidden="true" />
              </div>
              <div className="ge-init-body">
                <h3 className="ge-init-title">Eco-Conscious Construction</h3>
                <p className="ge-init-text">
                  Low-carbon civil methods, sustainable materials sourcing, passive ventilation designs, and energy-efficient building envelopes.
                </p>
                <ul className="ge-init-checklist">
                  <li><i className="ti ti-check" /> Sustainable local material sourcing</li>
                  <li><i className="ti ti-check" /> Passive thermal cooling architecture</li>
                  <li><i className="ti ti-check" /> Energy-saving LED and daylighting</li>
                </ul>
              </div>
            </div>

            {/* Card 3: Waste Management */}
            <div className="ge-init-card reveal">
              <div className="ge-init-header teal-grad">
                <i className="ti ti-recycle" aria-hidden="true" />
              </div>
              <div className="ge-init-body">
                <h3 className="ge-init-title">Waste Reduction &amp; Recycling</h3>
                <p className="ge-init-text">
                  Structured site waste management: segregation of construction debris, aggregate crushing for re-use, and full compliance with ZEMA regulations.
                </p>
                <ul className="ge-init-checklist">
                  <li><i className="ti ti-check" /> On-site debris segregation</li>
                  <li><i className="ti ti-check" /> Concrete &amp; steel recycling</li>
                  <li><i className="ti ti-check" /> Zero hazardous runoff guarantees</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS: FROM IDEA TO IMPACT */}
      <section className="section-padding">
        <div className="section-inner">
          <div className="section-header-center reveal">
            <span className="section-badge green">
              <i className="ti ti-stairs" aria-hidden="true" /> Step-by-Step Delivery
            </span>
            <h2 className="section-title">
              From <span>Idea to Clean Impact</span>
            </h2>
            <p className="section-subtitle">
              Our proven 4-stage engineering methodology guarantees seamless deployment and high yield.
            </p>
          </div>

          <div className="ge-process-grid">
            <div className="ge-process-step reveal">
              <div className="ge-step-num">01</div>
              <div className="ge-step-icon"><i className="ti ti-chart-dots" /></div>
              <h3 className="ge-step-title">Site Assessment</h3>
              <p className="ge-step-desc">
                Comprehensive solar irradiance audit, load profiling, roof structure inspection, and grid availability analysis.
              </p>
            </div>

            <div className="ge-process-step reveal">
              <div className="ge-step-num">02</div>
              <div className="ge-step-icon"><i className="ti ti-pencil-bolt" /></div>
              <h3 className="ge-step-title">Design &amp; Sizing</h3>
              <p className="ge-step-desc">
                Electrical schematic design, equipment selection (panels, inverters, storage), and duty clearance procurement.
              </p>
            </div>

            <div className="ge-process-step reveal">
              <div className="ge-step-num">03</div>
              <div className="ge-step-icon"><i className="ti ti-tool" /></div>
              <h3 className="ge-step-title">Certified Installation</h3>
              <p className="ge-step-desc">
                Installation by certified technicians adhering to IEC standards and ZESCO grid connection protocols.
              </p>
            </div>

            <div className="ge-process-step reveal">
              <div className="ge-step-num">04</div>
              <div className="ge-step-icon"><i className="ti ti-activity" /></div>
              <h3 className="ge-step-title">Monitor &amp; Maintain</h3>
              <p className="ge-step-desc">
                Real-time dashboard monitoring, preventative inspections, and emergency maintenance support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ENVIRONMENTAL PLEDGES */}
      <section className="section-padding section-alt-bg">
        <div className="section-inner">
          <div className="section-header-center reveal">
            <span className="section-badge green">
              <i className="ti ti-plant" aria-hidden="true" /> Concrete Commitments
            </span>
            <h2 className="section-title">
              Our <span>Environmental Pledges</span>
            </h2>
            <p className="section-subtitle">
              Sustainability is not an afterthought — it is embedded in how we plan, construct, and procure.
            </p>
          </div>

          <div className="hs-cards-grid">
            <div className="hs-card reveal-left">
              <div className="hs-icon green"><i className="ti ti-trees" /></div>
              <h3 className="hs-card-title">Tree Planting Initiative</h3>
              <p className="hs-card-text">
                For every major civil project completed, Maktub plants trees in surrounding communities. Our target is 5,000 native trees by 2027 to restore canopies, prevent soil erosion, and offset carbon in Lusaka and Muchinga.
              </p>
            </div>

            <div className="hs-card reveal-right">
              <div className="hs-icon gold"><i className="ti ti-solar-panel" /></div>
              <h3 className="hs-card-title">Solar-First Site Camps</h3>
              <p className="hs-card-text">
                All Maktub contractor site offices and base camps are powered by standalone solar systems, drastically cutting noisy, polluting diesel generator runs during project execution.
              </p>
            </div>

            <div className="hs-card reveal-left">
              <div className="hs-icon teal"><i className="ti ti-droplet" /></div>
              <h3 className="hs-card-title">Water Harvesting &amp; Conservation</h3>
              <p className="hs-card-text">
                Rainwater harvesting systems are built into new building designs wherever feasible. On-site dust suppression utilizes recycled wastewater in full compliance with ZEMA standards.
              </p>
            </div>

            <div className="hs-card reveal-right">
              <div className="hs-icon green"><i className="ti ti-certificate" /></div>
              <h3 className="hs-card-title">Sustainable Procurement</h3>
              <p className="hs-card-text">
                We evaluate our material suppliers on environmental credentials — sourcing timber exclusively from certified sustainable forestry and opting for low-embodied carbon alternatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GREEN CTA */}
      <section className="section-padding">
        <div className="section-inner">
          <div className="ge-cta-card-modern reveal">
            <div className="ge-cta-glow" aria-hidden="true" />
            <div className="ge-cta-icon-box">
              <i className="ti ti-solar-panel" aria-hidden="true" />
            </div>
            <div className="ge-cta-content">
              <span className="section-badge green light">Start Your Green Transition</span>
              <h2 className="ge-cta-title">
                Ready to Generate Clean, <span>Reliable Solar Power?</span>
              </h2>
              <p className="ge-cta-sub">
                Contact our green energy engineering team for an on-site energy assessment, rooftop sizing, or quotation.
              </p>
              <div className="ge-cta-buttons">
                <Link href="/contact" className="btn-green-primary">
                  <i className="ti ti-mail" aria-hidden="true" />
                  <span>Request a Solar Quote</span>
                </Link>
                <Link href="/services" className="btn-green-ghost">
                  <span>View All Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import CategoryCardCarousel from '../../components/CategoryCardCarousel';

export const metadata = {
  title: 'Services & Solutions',
  description: 'Explore Maktub Engineering civil construction, roadworks, equipment supplies, machinery servicing, and general corporate supply solutions across Zambia.',
  alternates: { canonical: '/services' }
};

const CIVIL_SLIDES = [
  { img: '/resources/civileng.webp', caption: 'Building Construction' },
  { img: '/resources/road.webp', caption: 'Road & Bridge Works' },
  { img: '/resources/engineeringbuildings.webp', caption: 'Maintenance & Renovation' }
];

const EQUIPMENT_SLIDES = [
  { img: '/resources/equipment2.webp', caption: 'Machinery Procurement' },
  { img: '/resources/repairs2.webp', caption: 'Repair & Servicing' },
  { img: '/resources/warehouse.webp', caption: 'Spare Parts Supply' }
];

const GENERAL_SLIDES = [
  { img: '/resources/office2.webp', caption: 'Office Equipment & IT' },
  { img: '/resources/stationary.webp', caption: 'Stationery & Consumables' },
  { img: '/resources/office.webp', caption: 'Office & School Furniture' },
  { img: '/resources/ppe.webp', caption: 'PPE & Safety Wear' },
  { img: '/resources/construction.webp', caption: 'Construction Materials' },
  { img: '/resources/construction2.webp', caption: 'General Hardware' }
];

export default function ServicesPage() {
  return (
    <div className="services-page-container">
      {/* 1. PAGE HEADER */}
      <section className="page-hero-header">
        <div className="page-hero-bg" aria-hidden="true" />
        <div className="section-inner page-hero-inner">
          <div className="page-hero-badge reveal">
            <i className="ti ti-tools" aria-hidden="true" /> Comprehensive Solutions
          </div>
          <h1 className="page-hero-title reveal">
            Engineering Excellence &amp; <span>Dependable Supplies</span>
          </h1>
          <p className="page-hero-lead reveal">
            From Grade 5 civil engineering and road construction to heavy equipment maintenance and turnkey office solutions — we deliver with precision and national compliance.
          </p>
        </div>
      </section>

      {/* 2. CATEGORIES OVERVIEW GRID */}
      <section className="section-padding">
        <div className="section-inner">
          <div className="section-header-center reveal">
            <span className="section-badge">
              <i className="ti ti-category" aria-hidden="true" /> Service Divisions
            </span>
            <h2 className="section-title">
              Our <span>Three Core Divisions</span>
            </h2>
            <p className="section-subtitle">
              Select any division below to view technical specifications, service scopes, and capabilities.
            </p>
          </div>

          <div className="category-overview-grid">
            {/* Division 1: Civil Engineering */}
            <div className="category-overview-card reveal">
              <div className="category-card-text">
                <div className="category-badge-icon">
                  <i className="ti ti-building-arch" aria-hidden="true" />
                </div>
                <h3 className="category-card-title">Civil Engineering</h3>
                <p className="category-card-desc">
                  Infrastructure development, high-spec building construction, and civil roadworks across Zambia.
                </p>
                <div className="category-checklist">
                  <div><i className="ti ti-check" /> Commercial &amp; Residential Building</div>
                  <div><i className="ti ti-check" /> Feeder Roads &amp; Asphalt Surfacing</div>
                  <div><i className="ti ti-check" /> Structural Refurbishment &amp; Roofing</div>
                </div>
                <a href="#services-section-civil" className="category-jump-link">
                  <span>Explore Civil Engineering</span>
                  <i className="ti ti-arrow-down" aria-hidden="true" />
                </a>
              </div>
              <div className="category-card-media">
                <CategoryCardCarousel slides={CIVIL_SLIDES} />
              </div>
            </div>

            {/* Division 2: Equipment Supplies */}
            <div className="category-overview-card reveal">
              <div className="category-card-text">
                <div className="category-badge-icon">
                  <i className="ti ti-crane" aria-hidden="true" />
                </div>
                <h3 className="category-card-title">Equipment Supplies</h3>
                <p className="category-card-desc">
                  Procurement, mobile technical support, and genuine OEM spare parts for heavy industrial machinery.
                </p>
                <div className="category-checklist">
                  <div><i className="ti ti-check" /> Heavy Machinery Procurement</div>
                  <div><i className="ti ti-check" /> On-Site Diagnostics &amp; Overhauls</div>
                  <div><i className="ti ti-check" /> Komatsu, CAT &amp; Volvo OEM Spares</div>
                </div>
                <a href="#services-section-equipment" className="category-jump-link">
                  <span>Explore Equipment Supplies</span>
                  <i className="ti ti-arrow-down" aria-hidden="true" />
                </a>
              </div>
              <div className="category-card-media">
                <CategoryCardCarousel slides={EQUIPMENT_SLIDES} />
              </div>
            </div>

            {/* Division 3: General Supplies */}
            <div className="category-overview-card reveal">
              <div className="category-card-text">
                <div className="category-badge-icon">
                  <i className="ti ti-shopping-bag" aria-hidden="true" />
                </div>
                <h3 className="category-card-title">General Supplies</h3>
                <p className="category-card-desc">
                  A dependable one-stop partner for corporate, educational, safety, and structural materials.
                </p>
                <div className="category-checklist">
                  <div><i className="ti ti-check" /> Ergonomic Office &amp; School Desks</div>
                  <div><i className="ti ti-check" /> Certified Safety Gear &amp; PPE</div>
                  <div><i className="ti ti-check" /> Cement, Steel &amp; Bulk Building Supplies</div>
                </div>
                <a href="#services-section-general" className="category-jump-link">
                  <span>Explore General Supplies</span>
                  <i className="ti ti-arrow-down" aria-hidden="true" />
                </a>
              </div>
              <div className="category-card-media">
                <CategoryCardCarousel slides={GENERAL_SLIDES} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DETAILED SECTION: CIVIL ENGINEERING */}
      <section id="services-section-civil" className="section-padding section-alt-bg service-block-scroll">
        <div className="section-inner">
          <div className="section-header-left reveal">
            <span className="section-badge">
              <i className="ti ti-building" aria-hidden="true" /> Division 01
            </span>
            <h2 className="section-title">
              Civil Engineering &amp; <span>Construction</span>
            </h2>
            <p className="section-lead-text">
              National Council for Construction (NCC Grade 5 Cat C, Grade 4 Cat R) registered works. We handle full project lifecycles from architectural review and foundation to high-end finishing.
            </p>
          </div>

          <div className="service-detail-grid">
            {/* Building Construction */}
            <div className="service-detail-card reveal">
              <div className="service-card-img-wrap">
                <Image
                  src="/resources/civileng.webp"
                  alt="Building Construction"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="service-card-img"
                />
                <span className="service-card-pill">Grade 5 NCC</span>
              </div>
              <div className="service-card-body">
                <div className="service-icon-bubble">
                  <i className="ti ti-building-community" aria-hidden="true" />
                </div>
                <h3 className="service-card-title">Building Construction</h3>
                <p className="service-card-text">
                  Quality residential, commercial, and institutional construction. We handle structural framing, masonry, electrical reticulation, plumbing, and specialized HVAC installations in strict compliance with the Zambian Building Code.
                </p>
                <div className="service-card-features">
                  <span><i className="ti ti-check" /> Commercial &amp; Institutional</span>
                  <span><i className="ti ti-check" /> High-End Residential</span>
                  <span><i className="ti ti-check" /> Turnkey Project Management</span>
                </div>
              </div>
            </div>

            {/* Road & Bridge Works */}
            <div className="service-detail-card reveal">
              <div className="service-card-img-wrap">
                <Image
                  src="/resources/road.webp"
                  alt="Road and Bridge Construction"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="service-card-img"
                />
                <span className="service-card-pill">Category R</span>
              </div>
              <div className="service-card-body">
                <div className="service-icon-bubble">
                  <i className="ti ti-road" aria-hidden="true" />
                </div>
                <h3 className="service-card-title">Road &amp; Bridge Works</h3>
                <p className="service-card-text">
                  Urban asphalt surfacing, gravel feeder roads, storm-water drainage culverts, and structural bridge engineering designed to withstand seasonal weather variations and heavy axle transport loads.
                </p>
                <div className="service-card-features">
                  <span><i className="ti ti-check" /> Asphalt &amp; Feeder Roads</span>
                  <span><i className="ti ti-check" /> Massive Earthworks &amp; Grading</span>
                  <span><i className="ti ti-check" /> Culverts &amp; Drainage Systems</span>
                </div>
              </div>
            </div>

            {/* Maintenance & Renovation */}
            <div className="service-detail-card reveal">
              <div className="service-card-img-wrap">
                <Image
                  src="/resources/engineeringbuildings.webp"
                  alt="Maintenance and Renovation"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="service-card-img"
                />
                <span className="service-card-pill">Refurbishment</span>
              </div>
              <div className="service-card-body">
                <div className="service-icon-bubble">
                  <i className="ti ti-tool" aria-hidden="true" />
                </div>
                <h3 className="service-card-title">Maintenance &amp; Renovation</h3>
                <p className="service-card-text">
                  Turnkey refurbishment for commercial and government assets. Includes structural integrity audits, modern roof waterproofing, industrial electrical upgrades, and aesthetic interior remodeling.
                </p>
                <div className="service-card-features">
                  <span><i className="ti ti-check" /> Structural Audits &amp; Retrofits</span>
                  <span><i className="ti ti-check" /> Industrial Waterproofing</span>
                  <span><i className="ti ti-check" /> Electrical &amp; Mechanical Upgrades</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DETAILED SECTION: EQUIPMENT SUPPLIES */}
      <section id="services-section-equipment" className="section-padding service-block-scroll">
        <div className="section-inner">
          <div className="section-header-left reveal">
            <span className="section-badge">
              <i className="ti ti-crane" aria-hidden="true" /> Division 02
            </span>
            <h2 className="section-title">
              Equipment Supplies &amp; <span>Technical Servicing</span>
            </h2>
            <p className="section-lead-text">
              High-performance machinery procurement, spare parts distribution, and mobile field servicing to maximize equipment uptime across Zambia.
            </p>
          </div>

          <div className="service-detail-grid">
            {/* Equipment Supplies */}
            <div className="service-detail-card reveal">
              <div className="service-card-img-wrap">
                <Image
                  src="/resources/equipment2.webp"
                  alt="Heavy Machinery Supplies"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="service-card-img"
                />
                <span className="service-card-pill">Procurement</span>
              </div>
              <div className="service-card-body">
                <div className="service-icon-bubble">
                  <i className="ti ti-tractor" aria-hidden="true" />
                </div>
                <h3 className="service-card-title">Machinery Procurement</h3>
                <p className="service-card-text">
                  Global supply chain access for heavy earthmovers, high-capacity concrete mixers, excavators, tippers, and industrial diesel generators delivered directly to active mining or construction sites.
                </p>
                <div className="service-card-features">
                  <span><i className="ti ti-check" /> Earthmovers &amp; Excavators</span>
                  <span><i className="ti ti-check" /> Concrete Mixing Plants</span>
                  <span><i className="ti ti-check" /> Duty Clearance &amp; Logistics</span>
                </div>
              </div>
            </div>

            {/* Repair & Servicing */}
            <div className="service-detail-card reveal">
              <div className="service-card-img-wrap">
                <Image
                  src="/resources/repairs2.webp"
                  alt="Equipment Repair and Servicing"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="service-card-img"
                />
                <span className="service-card-pill">Field Technicians</span>
              </div>
              <div className="service-card-body">
                <div className="service-icon-bubble">
                  <i className="ti ti-settings" aria-hidden="true" />
                </div>
                <h3 className="service-card-title">Repair &amp; Field Servicing</h3>
                <p className="service-card-text">
                  Minimize costly site downtime with our mobile repair crews. We specialize in hydraulic system rebuilding, diesel engine overhauls, and preventative scheduled maintenance programs.
                </p>
                <div className="service-card-features">
                  <span><i className="ti ti-check" /> Mobile Rapid Response</span>
                  <span><i className="ti ti-check" /> Hydraulic &amp; Engine Overhauls</span>
                  <span><i className="ti ti-check" /> Preventative Maintenance Plans</span>
                </div>
              </div>
            </div>

            {/* Spare Parts Supply */}
            <div className="service-detail-card reveal">
              <div className="service-card-img-wrap">
                <Image
                  src="/resources/warehouse.webp"
                  alt="Spare Parts Supply Warehouse"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="service-card-img"
                />
                <span className="service-card-pill">OEM Parts</span>
              </div>
              <div className="service-card-body">
                <div className="service-icon-bubble">
                  <i className="ti ti-components" aria-hidden="true" />
                </div>
                <h3 className="service-card-title">Spare Parts Supply</h3>
                <p className="service-card-text">
                  Extensive inventory of authentic OEM parts for Caterpillar, Komatsu, JCB, and Volvo machinery. High-pressure seals, heavy-duty filters, engine components, and bucket teeth.
                </p>
                <div className="service-card-features">
                  <span><i className="ti ti-check" /> Genuine OEM Components</span>
                  <span><i className="ti ti-check" /> High-Pressure Hydraulic Seals</span>
                  <span><i className="ti ti-check" /> Fast Air &amp; Road Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DETAILED SECTION: GENERAL SUPPLIES */}
      <section id="services-section-general" className="section-padding section-alt-bg service-block-scroll">
        <div className="section-inner">
          <div className="section-header-left reveal">
            <span className="section-badge">
              <i className="ti ti-shopping-bag" aria-hidden="true" /> Division 03
            </span>
            <h2 className="section-title">
              General Supplies &amp; <span>Corporate Logistics</span>
            </h2>
            <p className="section-lead-text">
              ZPPA-approved citizen-owned supplier for government departments, mining firms, private businesses, and educational institutions across Zambia.
            </p>
          </div>

          <div className="service-detail-grid-6">
            {/* 1. Office Equipment */}
            <div className="service-mini-card reveal">
              <div className="mini-card-img-box">
                <Image src="/resources/office2.webp" alt="Office Equipment & Printers" fill sizes="300px" className="mini-card-img" />
              </div>
              <div className="mini-card-body">
                <div className="mini-card-icon"><i className="ti ti-device-laptop" /></div>
                <h4 className="mini-card-title">Office Equipment &amp; IT</h4>
                <p className="mini-card-text">High-speed multi-function printers, laser copiers, UPS backups, and complete administrative IT deployments.</p>
              </div>
            </div>

            {/* 2. Stationery & Consumables */}
            <div className="service-mini-card reveal">
              <div className="mini-card-img-box">
                <Image src="/resources/stationary.webp" alt="Stationery & Office Consumables" fill sizes="300px" className="mini-card-img" />
              </div>
              <div className="mini-card-body">
                <div className="mini-card-icon"><i className="ti ti-file-text" /></div>
                <h4 className="mini-card-title">Stationery &amp; Consumables</h4>
                <p className="mini-card-text">High-volume paper supplies, toner cartridges, filing systems, and priority delivery supply contracts.</p>
              </div>
            </div>

            {/* 3. Office & School Furniture */}
            <div className="service-mini-card reveal">
              <div className="mini-card-img-box">
                <Image src="/resources/office.webp" alt="Office & School Furniture" fill sizes="300px" className="mini-card-img" />
              </div>
              <div className="mini-card-body">
                <div className="mini-card-icon"><i className="ti ti-armchair" /></div>
                <h4 className="mini-card-title">Office &amp; School Furniture</h4>
                <p className="mini-card-text">Ergonomic executive chairs, modular workstations, durable school desks, and laboratory workbenches.</p>
              </div>
            </div>

            {/* 4. PPE & Safety Wear */}
            <div className="service-mini-card reveal">
              <div className="mini-card-img-box">
                <Image src="/resources/ppe.webp" alt="PPE and Safety Wear" fill sizes="300px" className="mini-card-img" />
              </div>
              <div className="mini-card-body">
                <div className="mini-card-icon"><i className="ti ti-hard-hat" /></div>
                <h4 className="mini-card-title">PPE &amp; Safety Equipment</h4>
                <p className="mini-card-text">Industrial hard hats, high-visibility vest systems, steel-toe boots, and chemical handling gear meeting EIZ/Labour standards.</p>
              </div>
            </div>

            {/* 5. Construction Materials */}
            <div className="service-mini-card reveal">
              <div className="mini-card-img-box">
                <Image src="/resources/construction.webp" alt="Construction Materials & Steel" fill sizes="300px" className="mini-card-img" />
              </div>
              <div className="mini-card-body">
                <div className="mini-card-icon"><i className="ti ti-bricks" /></div>
                <h4 className="mini-card-title">Construction Materials</h4>
                <p className="mini-card-text">High-tensile rebar, premium grade cement, high-purity aggregates, blocks, and timber with direct site drop-off.</p>
              </div>
            </div>

            {/* 6. General Hardware & Tools */}
            <div className="service-mini-card reveal">
              <div className="mini-card-img-box">
                <Image src="/resources/construction2.webp" alt="General Hardware & Workshop Tools" fill sizes="300px" className="mini-card-img" />
              </div>
              <div className="mini-card-body">
                <div className="mini-card-icon"><i className="ti ti-hammer" /></div>
                <h4 className="mini-card-title">General Hardware &amp; Tools</h4>
                <p className="mini-card-text">Precision toolkits, industrial-grade fasteners, electrical fittings, and heavy-duty workshop power tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HEALTH, SAFETY & SUSTAINABILITY */}
      <section className="section-padding">
        <div className="section-inner">
          <div className="section-header-center reveal">
            <span className="section-badge green">
              <i className="ti ti-shield-heart" aria-hidden="true" /> Health, Safety &amp; Environment
            </span>
            <h2 className="section-title">
              Our <span>Commitment</span> to Safety &amp; Standards
            </h2>
            <p className="section-subtitle">
              The wellbeing of our workforce, clients, and the communities we operate in is non-negotiable.
            </p>
          </div>

          <div className="hs-banner-visual reveal">
            <div className="hs-banner-img-wrap">
              <Image
                src="/resources/health.webp"
                alt="Maktub engineers conducting on-site health and safety inspection"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="hs-banner-img"
              />
              <div className="hs-banner-overlay">
                <div className="hs-banner-tag">
                  <i className="ti ti-certificate" aria-hidden="true" /> Zero Incident Target
                </div>
              </div>
            </div>
          </div>

          <div className="hs-cards-grid">
            <div className="hs-card reveal-left">
              <div className="hs-icon green">
                <i className="ti ti-leaf" aria-hidden="true" />
              </div>
              <h3 className="hs-card-title">Environmental Sustainability</h3>
              <p className="hs-card-text">
                We conduct our business in an environmentally responsible manner. From responsibly sourcing timber and aggregates to managing site energy and recycling construction debris, we reduce our ecological footprint across every project in Zambia.
              </p>
            </div>

            <div className="hs-card reveal-right">
              <div className="hs-icon gold">
                <i className="ti ti-shield-check" aria-hidden="true" />
              </div>
              <h3 className="hs-card-title">Health &amp; Safety Compliance</h3>
              <p className="hs-card-text">
                All construction sites, machinery handling, and warehouse workflows strictly adhere to the Workers’ Compensation Act, EIZ engineering safety codes, and national labor regulations. Daily safety briefings and mandatory PPE ensure accident-free sites.
              </p>
            </div>
          </div>

          <div className="safety-pills-row">
            <div className="safety-pill-item reveal">
              <i className="ti ti-clipboard-check" aria-hidden="true" />
              <div>
                <strong>Regular Site Audits</strong>
                <span>Inspected before and during all work phases</span>
              </div>
            </div>

            <div className="safety-pill-item reveal">
              <i className="ti ti-school" aria-hidden="true" />
              <div>
                <strong>Continuous Training</strong>
                <span>Safety certifications for all technical staff</span>
              </div>
            </div>

            <div className="safety-pill-item reveal">
              <i className="ti ti-hard-hat" aria-hidden="true" />
              <div>
                <strong>100% PPE Compliance</strong>
                <span>Full safety gear mandatory on all active sites</span>
              </div>
            </div>

            <div className="safety-pill-item reveal">
              <i className="ti ti-world-check" aria-hidden="true" />
              <div>
                <strong>ZEMA Compliant</strong>
                <span>Responsible waste disposal &amp; water protection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="section-padding section-alt-bg">
        <div className="section-inner">
          <div className="cta-banner-box reveal">
            <div className="cta-banner-glow" aria-hidden="true" />
            <div className="cta-banner-text">
              <span className="section-badge light">Request a Quotation</span>
              <h2 className="cta-banner-title">
                Ready to Discuss Your <span>Project Scope?</span>
              </h2>
              <p className="cta-banner-sub">
                Our estimation and engineering team will provide a tailored quote and timeline for your construction or supply requirements.
              </p>
            </div>
            <div className="cta-banner-buttons">
              <Link href="/contact" className="btn-cta-primary">
                <i className="ti ti-mail" aria-hidden="true" />
                <span>Get a Fast Quote</span>
              </Link>
              <Link href="/green-energy" className="btn-cta-ghost">
                <i className="ti ti-leaf" aria-hidden="true" />
                <span>Green Energy Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

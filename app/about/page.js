import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About Us',
  description: 'Discover Maktub Engineering & General Supply Limited — a proud Zambian-owned leader in civil construction, engineering, and supply services.',
  alternates: { canonical: '/about' }
};

const TIMELINE_EVENTS = [
  {
    year: 'January 2020',
    dot: '2020',
    title: 'Company Incorporated',
    desc: 'Maktub Engineering & General Supply Limited was incorporated as a Company Limited by Shares under the Companies Act of Zambia (Reg No. 120200000224).'
  },
  {
    year: 'February 2020',
    dot: '2020',
    title: 'ZRA Tax Registration',
    desc: 'Registered with the Zambia Revenue Authority (TPIN: 2558884909) and commenced statutory turnover tax and corporate compliance obligations.'
  },
  {
    year: 'December 2022',
    dot: '2022',
    title: 'EIZ Registered Engineering Organisation',
    desc: 'Formally accredited and certified by the Engineering Institute of Zambia (EIZ) as a Registered Engineering Organisation (R. Eng. O).'
  },
  {
    year: 'January 2025',
    dot: '2025',
    title: 'Ministry of Defence Approved Vendor',
    desc: 'Renewed high-security clearance to conduct engineering and supply contracts with the Zambia Ministry of Defence (VIN: MOD/VIN/1238/23).'
  },
  {
    year: '2026',
    dot: '2026',
    title: 'Practicing License & NCC Grade 5',
    desc: 'Authorized by the Engineering Registration Board & National Council for Construction (NCC Grade 5 Cat C, Grade 6 Cat E, Grade 4 Cat R) valid through 2026.'
  }
];

const LEADERS = [
  {
    name: 'Clive Muyunda',
    role: 'Chief Executive Officer',
    img: '/resources/clive_muyunda.webp',
    bio: 'Clive leads Maktub with over 10 years of experience in civil engineering and strategic procurement, driving the company’s commitment to engineering excellence and sustainable infrastructure across Zambia.',
    linkedin: 'https://linkedin.com/in/clive-muyunda',
    twitter: 'https://twitter.com/clive_muyunda',
    email: 'mailto:muyundaclive8@gmail.com'
  },
  {
    name: 'Sydney Bwalya',
    role: 'Chief Operations Officer',
    img: '/resources/cydney_bwalya.webp',
    bio: 'Sydney oversees the firm’s diverse supply chain and project execution, ensuring that every delivery — from structural construction materials to institutional office equipment — meets Maktub’s rigorous standards.',
    linkedin: 'https://linkedin.com/in/cydney-bwalya',
    twitter: 'https://twitter.com/cydney_bwalya',
    email: 'mailto:info@maktubengineering.com'
  }
];

export default function AboutPage() {
  return (
    <div className="about-page-container">
      {/* 1. PAGE HEADER */}
      <section className="page-hero-header">
        <div className="page-hero-bg" aria-hidden="true" />
        <div className="section-inner page-hero-inner">
          <div className="page-hero-badge reveal">
            <span className="font-mono">[ about MAKTUB Engineering ]</span>
          </div>
          <h1 className="page-hero-title reveal">
            Building <span>Stronger Structures</span>, Empowering Zambian Growth
          </h1>
          <p className="page-hero-lead reveal">
            Since January 2020, Maktub Engineering &amp; General Supply Limited has combined technical engineering expertise with supply chain reliability to serve clients nationwide.
          </p>
        </div>
      </section>

      {/* 2. WHO WE ARE & MISSION / VISION */}
      <section className="section-padding">
        <div className="section-inner">
          <div className="two-col-grid">
            <div className="col-visual reveal-left">
              <div className="about-visual-banner">
                <div className="about-visual-inner">
                  <div className="about-big-mark">M</div>
                  <div className="about-pill-tag">[ EST. JAN 2020 / ZAMBIA ]</div>
                  <h3 className="about-visual-heading">
                    Civil Construction <br />
                    Equipment &amp; Supplies <br />
                    Green Solutions
                  </h3>
                  <div className="about-visual-location">
                    <i className="ti ti-map-pin" aria-hidden="true" /> Lusaka &amp; Muchinga, Zambia
                  </div>
                </div>
              </div>
            </div>

            <div className="col-content reveal-right">
              <span className="section-badge">
                [ 02 / CORPORATE OVERVIEW ]
              </span>
              <h2 className="section-title">
                A <span>Zambian-Owned</span> Partner Built on Reliability
              </h2>
              <p className="section-lead-text">
                Maktub Engineering &amp; General Supply Limited delivers integrated engineering solutions and dependable supply services to both public and private sector clients across Zambia.
              </p>
              <p className="section-body-text">
                Whether executing complex reinforced concrete building works, supplying industrial spares to remote sites, or outfitting schools and government departments with durable furniture, we pride ourselves on precision, safety, and strict deadline compliance.
              </p>

              {/* Mission & Vision Cards */}
              <div className="mv-cards-grid">
                <div className="mv-card">
                  <div className="mv-icon-wrap">
                    <i className="ti ti-rocket" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-1">[ 01 / MISSION ]</div>
                    <h3 className="mv-card-title">Our Mission</h3>
                    <p className="mv-card-text">
                      To be a premier, dependable partner in construction, engineering, and supply industries by delivering high-caliber services tailored to client requirements.
                    </p>
                  </div>
                </div>

                <div className="mv-card">
                  <div className="mv-icon-wrap gold">
                    <i className="ti ti-eye" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-500/80 mb-1">[ 02 / VISION ]</div>
                    <h3 className="mv-card-title">Our Vision</h3>
                    <p className="mv-card-text">
                      To be a leading provider of construction, engineering innovations, and general supplies throughout Southern Africa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="section-padding section-alt-bg">
        <div className="section-inner">
          <div className="section-header-center reveal">
            <span className="section-badge">
              [ 03 / PRINCIPLES &amp; GOVERNANCE ]
            </span>
            <h2 className="section-title">
              Values That <span>Define Us</span>
            </h2>
            <p className="section-subtitle">
              Every project we undertake is anchored in four foundational pillars of professional conduct.
            </p>
          </div>

          <div className="values-grid-4">
            <div className="value-item-card reveal">
              <div className="flex items-center justify-between mb-4">
                <div className="value-icon gold !mb-0">
                  <i className="ti ti-star" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-mono text-neutral-400 font-semibold">[ 01 ]</span>
              </div>
              <h3 className="value-title">Quality</h3>
              <p className="value-desc">
                We never compromise on materials, structural integrity, or standards. Quality is the benchmark of every deliverable.
              </p>
            </div>

            <div className="value-item-card reveal">
              <div className="flex items-center justify-between mb-4">
                <div className="value-icon blue !mb-0">
                  <i className="ti ti-bulb" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-mono text-neutral-400 font-semibold">[ 02 ]</span>
              </div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-desc">
                Adopting smart engineering practices, green technologies, and modern supply chain workflows for optimal efficiency.
              </p>
            </div>

            <div className="value-item-card reveal">
              <div className="flex items-center justify-between mb-4">
                <div className="value-icon green !mb-0">
                  <i className="ti ti-shield-check" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-mono text-neutral-400 font-semibold">[ 03 ]</span>
              </div>
              <h3 className="value-title">Integrity</h3>
              <p className="value-desc">
                Transparent operations, ethical compliance, clear contracts, and honest pricing across all client partnerships.
              </p>
            </div>

            <div className="value-item-card reveal">
              <div className="flex items-center justify-between mb-4">
                <div className="value-icon purple !mb-0">
                  <i className="ti ti-users" aria-hidden="true" />
                </div>
                <span className="text-[11px] font-mono text-neutral-400 font-semibold">[ 04 ]</span>
              </div>
              <h3 className="value-title">Teamwork</h3>
              <p className="value-desc">
                Collaborating closely with clients, subcontractors, engineers, and community stakeholders for shared success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPANY TIMELINE */}
      <section className="section-padding">
        <div className="section-inner">
          <div className="section-header-center reveal">
            <span className="section-badge">
              [ 04 / MILESTONES &amp; ACCREDITATION ]
            </span>
            <h2 className="section-title">
              Our <span>Journey</span>
            </h2>
            <p className="section-subtitle">
              A track record of continuous regulatory compliance, capability expansion, and customer satisfaction.
            </p>
          </div>

          <div className="timeline-modern-wrap">
            {TIMELINE_EVENTS.map((item, idx) => (
              <div key={idx} className="timeline-row reveal">
                <div className="timeline-dot-col">
                  <div className="timeline-node">{item.dot}</div>
                  {idx < TIMELINE_EVENTS.length - 1 && <div className="timeline-connector-line" />}
                </div>
                <div className="timeline-card">
                  <div className="flex items-center justify-between mb-1">
                    <span className="timeline-date">{item.year}</span>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">[ 0{idx + 1} ]</span>
                  </div>
                  <h3 className="timeline-heading">{item.title}</h3>
                  <p className="timeline-text">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP TEAM */}
      <section className="section-padding section-alt-bg">
        <div className="section-inner">
          <div className="section-header-center reveal">
            <span className="section-badge">
              [ 05 / EXECUTIVE GOVERNANCE ]
            </span>
            <h2 className="section-title">
              The <span>Visionaries</span> Behind Maktub
            </h2>
            <p className="section-subtitle">
              Experienced leaders steering engineering excellence, supply chain innovation, and client success across Zambia.
            </p>
          </div>

          <div className="leaders-grid">
            {LEADERS.map((leader, idx) => (
              <div key={idx} className="leader-card reveal">
                <div className="leader-photo-wrap">
                  <Image
                    src={leader.img}
                    alt={leader.name}
                    width={120}
                    height={120}
                    className="leader-photo"
                  />
                  <div className="leader-badge-icon">
                    <i className="ti ti-briefcase" aria-hidden="true" />
                  </div>
                </div>

                <div className="leader-info">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 mb-1">[ EXEC 0{idx + 1} ]</div>
                  <h3 className="leader-name">{leader.name}</h3>
                  <div className="leader-role">{leader.role}</div>
                  <p className="leader-bio">{leader.bio}</p>

                  <div className="leader-social-links">
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="leader-link-btn"
                      aria-label={`${leader.name}'s LinkedIn`}
                    >
                      <i className="ti ti-brand-linkedin" aria-hidden="true" />
                    </a>
                    <a
                      href={leader.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="leader-link-btn"
                      aria-label={`${leader.name}'s X Profile`}
                    >
                      <i className="ti ti-brand-x" aria-hidden="true" />
                    </a>
                    <a
                      href={leader.email}
                      className="leader-link-btn"
                      aria-label={`Email ${leader.name}`}
                    >
                      <i className="ti ti-mail" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="section-padding">
        <div className="section-inner">
          <div className="cta-banner-box reveal">
            <div className="cta-banner-glow" aria-hidden="true" />
            <div className="cta-banner-text">
              <span className="section-badge light">[ 06 / COLLABORATION ]</span>
              <h2 className="cta-banner-title">
                Ready to Partner with a <span>Certified Leader?</span>
              </h2>
              <p className="cta-banner-sub">
                Contact our Lusaka headquarters or Muchinga regional office to schedule a consultation.
              </p>
            </div>
            <div className="cta-banner-buttons">
              <Link href="/contact" className="btn-cta-primary">
                <i className="ti ti-mail" aria-hidden="true" />
                <span>Contact Leadership</span>
              </Link>
              <Link href="/credentials" className="btn-cta-ghost">
                <i className="ti ti-certificate" aria-hidden="true" />
                <span>Review Credentials</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

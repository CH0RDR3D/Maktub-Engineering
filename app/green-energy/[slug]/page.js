import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  GREEN_ENERGY_SOLUTIONS,
  GREEN_ENERGY_SECTORS
} from '../../../lib/greenEnergyData';
import GreenEnergyAssessmentForm from '../../../components/GreenEnergyAssessmentForm';

// Pre-render all 20 solution routes statically
export async function generateStaticParams() {
  return GREEN_ENERGY_SOLUTIONS.map((sol) => ({
    slug: sol.slug
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = GREEN_ENERGY_SOLUTIONS.find((s) => s.slug === slug);

  if (!solution) {
    return {
      title: 'Solution Not Found | Maktub Engineering'
    };
  }

  return {
    title: `${solution.title} | Green Energy Solutions`,
    description: `${solution.tagline} ${solution.overview.slice(0, 140)}...`,
    alternates: {
      canonical: `/green-energy/${solution.slug}`
    },
    openGraph: {
      title: `${solution.title} | Maktub Engineering`,
      description: solution.tagline
    }
  };
}

export default async function GreenEnergyDetailPage({ params }) {
  const { slug } = await params;
  const solution = GREEN_ENERGY_SOLUTIONS.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const sectorObj = GREEN_ENERGY_SECTORS.find((sec) => sec.id === solution.sector);

  // Find related solutions in the same sector or adjacent
  const relatedSolutions = GREEN_ENERGY_SOLUTIONS.filter(
    (s) => s.slug !== solution.slug && (s.sector === solution.sector || s.num <= 5)
  ).slice(0, 3);

  return (
    <div className="ge-detail-page-container">
      {/* 1. BREADCRUMBS & TOP NAV */}
      <div className="ge-detail-breadcrumb-bar">
        <div className="section-inner">
          <nav className="ge-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/" className="ge-breadcrumb-link">
              <i className="ti ti-home" aria-hidden="true" /> Home
            </Link>
            <span className="ge-breadcrumb-sep" aria-hidden="true">
              /
            </span>
            <Link href="/green-energy" className="ge-breadcrumb-link">
              Green Energy
            </Link>
            <span className="ge-breadcrumb-sep" aria-hidden="true">
              /
            </span>
            <span className="ge-breadcrumb-current" aria-current="page">
              {solution.shortTitle || solution.title}
            </span>
          </nav>
        </div>
      </div>

      {/* 2. DETAIL HERO HEADER */}
      <section className="ge-detail-hero">
        <div className="section-inner ge-detail-hero-inner">
          <div className="ge-detail-hero-badge reveal">
            <i className={solution.icon} aria-hidden="true" />
            <span>Solution #{String(solution.num).padStart(2, '0')} • {solution.badge}</span>
          </div>

          <h1 className="ge-detail-hero-title reveal">
            {solution.title}
          </h1>

          <p className="ge-detail-hero-tagline reveal">
            {solution.tagline}
          </p>

          <div className="ge-detail-hero-actions reveal">
            <a href="#assessment-form" className="btn-green-primary">
              <i className="ti ti-calculator" aria-hidden="true" />
              <span>Request Technical Proposal</span>
            </a>
            <Link href="/green-energy" className="btn-green-outline">
              <i className="ti ti-arrow-left" aria-hidden="true" />
              <span>Back to All Solutions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. MAIN SPECIFICATION BODY */}
      <section className="section-padding">
        <div className="section-inner">
          <div className="two-col-grid ge-detail-main-grid">
            {/* Left Content Column */}
            <div className="col-content reveal-left">
              <div className="ge-detail-overview-box">
                <span className="section-badge green">
                  <i className="ti ti-info-circle" aria-hidden="true" /> Overview &amp; Engineering Scope
                </span>
                <h2 className="section-title">
                  Engineered for <span>Reliability &amp; Yield</span>
                </h2>
                <p className="ge-detail-overview-text">
                  {solution.overview}
                </p>

                {solution.formula && (
                  <div className="ge-formula-callout">
                    <div className="ge-formula-label">System Architecture Formula:</div>
                    <div className="ge-formula-text">
                      <i className="ti ti-cpu" /> {solution.formula}
                    </div>
                  </div>
                )}

                {solution.workflow && (
                  <div className="ge-workflow-callout">
                    <div className="ge-workflow-label">Structured Implementation Workflow:</div>
                    <div className="ge-workflow-steps">
                      {solution.workflow.split('→').map((st, i) => (
                        <span key={i} className="ge-wf-step">
                          <span className="ge-wf-num">{i + 1}</span>
                          {st.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {solution.scale && (
                  <div className="ge-scale-callout">
                    <i className="ti ti-scale" />
                    <div>
                      <strong>Project Sizing Capacity:</strong> {solution.scale}
                    </div>
                  </div>
                )}
              </div>

              {/* Multi-Phase EPC breakdown if present */}
              {solution.phases && (
                <div className="ge-epc-phases-wrap">
                  <h3 className="ge-section-subheading">
                    <i className="ti ti-layers-subtract" /> Integrated EPC Scope Breakdown
                  </h3>
                  <div className="ge-epc-phases-grid">
                    {solution.phases.map((phase, idx) => (
                      <div key={idx} className="ge-epc-phase-card">
                        <div className="ge-epc-phase-header">
                          <span className="ge-epc-phase-num">0{idx + 1}</span>
                          <h4>{phase.phase}</h4>
                        </div>
                        <ul className="ge-epc-phase-list">
                          {phase.items.map((item, pIdx) => (
                            <li key={pIdx}>
                              <i className="ti ti-check" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications & Capabilities List */}
              <div className="ge-applications-section">
                <h3 className="ge-section-subheading">
                  <i className="ti ti-list-check" /> Applications &amp; Deployment Scenarios
                </h3>
                <p className="ge-sub-lead">
                  Our {solution.title} services are tailored for diverse commercial, industrial, agricultural, and public-sector use cases:
                </p>

                <div className="ge-applications-grid">
                  {solution.applications.map((app, index) => (
                    <div key={index} className="ge-app-item">
                      <div className="ge-app-icon">
                        <i className="ti ti-check" aria-hidden="true" />
                      </div>
                      <span className="ge-app-title">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Models if present */}
              {solution.deliveryModels && (
                <div className="ge-delivery-models-box">
                  <h3 className="ge-section-subheading">
                    <i className="ti ti-file-certificate" /> Available Contracting &amp; Delivery Models
                  </h3>
                  <div className="ge-delivery-pills">
                    {solution.deliveryModels.map((m, idx) => (
                      <span key={idx} className="ge-delivery-pill">
                        <i className="ti ti-badge" /> {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Financing Models if present */}
              {solution.financingModels && (
                <div className="ge-delivery-models-box">
                  <h3 className="ge-section-subheading">
                    <i className="ti ti-coins" /> Structuring &amp; Financing Options
                  </h3>
                  <div className="ge-delivery-pills">
                    {solution.financingModels.map((m, idx) => (
                      <span key={idx} className="ge-delivery-pill gold">
                        <i className="ti ti-check" /> {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Regulatory Note if present */}
              {solution.regulatoryNote && (
                <div className="ge-detail-reg-callout">
                  <div className="ge-reg-callout-icon">
                    <i className="ti ti-shield-check" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="ge-reg-callout-title">Zambia Regulatory &amp; Policy Alignment</h4>
                    <p className="ge-reg-callout-desc">{solution.regulatoryNote}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar Column */}
            <aside className="col-visual ge-detail-sidebar reveal-right">
              {/* Solution Summary Card */}
              <div className="ge-sidebar-card">
                <div className="ge-sidebar-header">
                  <div className="ge-sidebar-icon">
                    <i className={solution.icon} />
                  </div>
                  <div>
                    <span className="ge-sidebar-sub">Service Division</span>
                    <h4 className="ge-sidebar-title">{solution.shortTitle || solution.title}</h4>
                  </div>
                </div>

                <div className="ge-sidebar-specs">
                  <div className="ge-sidebar-spec-row">
                    <span className="spec-label">Category:</span>
                    <span className="spec-value">{solution.badge}</span>
                  </div>
                  <div className="ge-sidebar-spec-row">
                    <span className="spec-label">Target Sector:</span>
                    <span className="spec-value">{sectorObj ? sectorObj.name : 'Multi-Sector'}</span>
                  </div>
                  <div className="ge-sidebar-spec-row">
                    <span className="spec-label">Delivery Scope:</span>
                    <span className="spec-value">Zambia &amp; SADC</span>
                  </div>
                  <div className="ge-sidebar-spec-row">
                    <span className="spec-label">Grid Compliance:</span>
                    <span className="spec-value">ZESCO / ERB Compliant</span>
                  </div>
                  <div className="ge-sidebar-spec-row">
                    <span className="spec-label">Warranty / O&amp;M:</span>
                    <span className="spec-value">Tier-1 OEM + SLA</span>
                  </div>
                </div>

                <a href="#assessment-form" className="btn-green-primary btn-block">
                  <i className="ti ti-calculator" />
                  <span>Request Assessment</span>
                </a>

                <a
                  href={`https://wa.me/260978294747?text=${encodeURIComponent(
                    `Hello Maktub Engineering, I would like to inquire about: ${solution.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-modern btn-block"
                >
                  <i className="ti ti-brand-whatsapp" />
                  <span>WhatsApp Senior Engineer</span>
                </a>
              </div>

              {/* Related Solutions Navigation */}
              <div className="ge-sidebar-card related-solutions-card">
                <h4 className="ge-sidebar-card-title">
                  <i className="ti ti-arrows-right-left" /> Related Solutions
                </h4>
                <div className="ge-related-list">
                  {relatedSolutions.map((rel) => (
                    <Link key={rel.id} href={`/green-energy/${rel.slug}`} className="ge-related-item">
                      <div className="ge-related-icon">
                        <i className={rel.icon} />
                      </div>
                      <div className="ge-related-info">
                        <div className="ge-related-title">{rel.title}</div>
                        <div className="ge-related-badge">{rel.badge}</div>
                      </div>
                      <i className="ti ti-chevron-right ge-related-arrow" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. PRE-CONFIGURED INQUIRY FORM */}
      <section id="assessment-form" className="section-padding section-alt-bg">
        <div className="section-inner">
          <div className="section-header-center reveal">
            <span className="section-badge green">
              <i className="ti ti-clipboard-data" aria-hidden="true" /> Technical Feasibility &amp; Quote
            </span>
            <h2 className="section-title">
              Request Assessment for <span>{solution.shortTitle || solution.title}</span>
            </h2>
            <p className="section-subtitle">
              Our engineering team will assess your site location, load requirements, and provide a comprehensive proposal.
            </p>
          </div>

          <div className="reveal">
            <GreenEnergyAssessmentForm
              defaultSolution={solution.id}
              defaultSector={solution.sector}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

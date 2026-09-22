'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  GREEN_ENERGY_SECTORS,
  GREEN_ENERGY_SOLUTIONS,
  PROJECT_DELIVERY_MODEL,
  REGULATORY_FRAMEWORKS,
  ADVISORY_APPROACH_STEPS,
  GREEN_COMMITMENT
} from '../lib/greenEnergyData';
import GreenEnergyAssessmentForm from './GreenEnergyAssessmentForm';
import SolarCalculator from './SolarCalculator';

const SECTIONS = [
  { id: 'green-solutions-explorer', label: '20 Solutions', icon: 'ti ti-layout-grid' },
  { id: 'solar-calculator-section', label: 'ROI Sizing Tool', icon: 'ti ti-calculator' },
  { id: 'project-delivery-model', label: '8-Stage Delivery', icon: 'ti ti-stairs' },
  { id: 'regulatory-frameworks', label: 'Zambia Policy & Grid', icon: 'ti ti-shield-check' },
  { id: 'energy-advisory-approach', label: '7-Step Advisory', icon: 'ti ti-chart-dots' },
  { id: 'green-energy-quote', label: 'Get Assessment', icon: 'ti ti-bolt', isQuote: true }
];

export default function GreenEnergyClientHub() {
  const [activeSector, setActiveSector] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'compact'
  const [quickViewSolution, setQuickViewSolution] = useState(null);
  const [activeDeliveryStep, setActiveDeliveryStep] = useState('01');
  const [isStepperInView, setIsStepperInView] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [activeApproachStep, setActiveApproachStep] = useState(0);
  const [activeSection, setActiveSection] = useState('green-solutions-explorer');
  const [estimateData, setEstimateData] = useState(null);

  const deliverySectionRef = useRef(null);
  const userInteractionTimeoutRef = useRef(null);

  // Filter solutions based on sector and search query
  const filteredSolutions = useMemo(() => {
    return GREEN_ENERGY_SOLUTIONS.filter((sol) => {
      const matchesSector = activeSector === 'all' || sol.sector === activeSector;
      const matchesSearch =
        !searchQuery.trim() ||
        sol.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sol.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sol.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sol.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesSector && matchesSearch;
    });
  }, [activeSector, searchQuery]);

  const activeDeliveryIdx = useMemo(() => {
    return PROJECT_DELIVERY_MODEL.findIndex((s) => s.step === activeDeliveryStep);
  }, [activeDeliveryStep]);

  const currentDelivery = useMemo(() => {
    return PROJECT_DELIVERY_MODEL[activeDeliveryIdx] || PROJECT_DELIVERY_MODEL[0];
  }, [activeDeliveryIdx]);

  const currentSectionIdx = useMemo(() => {
    return SECTIONS.findIndex((s) => s.id === activeSection);
  }, [activeSection]);

  // Scrollspy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = 0; i < SECTIONS.length; i++) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to auto-play delivery model tour when in viewport
  useEffect(() => {
    const target = deliverySectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStepperInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // Auto-play delivery model tour when visible in scroll, unless manually paused
  useEffect(() => {
    let timer;
    if (isStepperInView && !isUserPaused) {
      timer = setInterval(() => {
        setActiveDeliveryStep((prev) => {
          const currentIdx = PROJECT_DELIVERY_MODEL.findIndex((s) => s.step === prev);
          const nextIdx = (currentIdx + 1) % PROJECT_DELIVERY_MODEL.length;
          return PROJECT_DELIVERY_MODEL[nextIdx].step;
        });
      }, 3800);
    }
    return () => clearInterval(timer);
  }, [isStepperInView, isUserPaused]);

  // Handle manual step selection with graceful auto-resume after 6s idle
  const handleManualStepSelect = (stepNum) => {
    setActiveDeliveryStep(stepNum);
    setIsUserPaused(true);

    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }
    userInteractionTimeoutRef.current = setTimeout(() => {
      setIsUserPaused(false);
    }, 6000);
  };

  useEffect(() => {
    return () => {
      if (userInteractionTimeoutRef.current) {
        clearTimeout(userInteractionTimeoutRef.current);
      }
    };
  }, []);

  const handleApplyEstimate = (data) => {
    setEstimateData(data);
    const formEl = document.getElementById('energy-assessment-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="ge-hub-interactive-wrap">
      {/* ── STICKY IN-PAGE SCROLLSPY BAR ───────────────────────────────── */}
      <div className="ge-scrollspy-sticky" aria-label="Page navigation">
        <div className="section-inner ge-scrollspy-inner">
          <div className="ge-scrollspy-list">
            {SECTIONS.map((sec, idx) => {
              const isCompleted = idx < currentSectionIdx;
              const isActive = sec.id === activeSection;

              return (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className={`ge-spy-pill ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${sec.isQuote ? 'quote-pill' : ''
                    }`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                >
                  <span className="spy-status-indicator">
                    {isCompleted ? (
                      <i className="ti ti-check completed-icon" aria-hidden="true" />
                    ) : (
                      <i className={sec.icon} aria-hidden="true" />
                    )}
                  </span>
                  <span>{sec.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 1. SOLUTIONS EXPLORER SECTION ──────────────────────────────── */}
      <section id="green-solutions-explorer" className="section-padding ge-explorer-section">
        <div className="section-inner">
          <div className="section-header-center reveal">
            <span className="section-badge green">
              <i className="ti ti-bolt" aria-hidden="true" /> Comprehensive Solutions Portfolio
            </span>
            <h2 className="section-title">
              Our <span>Green Energy &amp; Sustainable</span> Solutions
            </h2>
            <p className="section-subtitle">
              Explore 20 specialized renewable energy, energy storage, industrial power, and EPC capabilities engineered for Zambia and regional African markets.
            </p>
          </div>

          {/* Search, Filter Bar & View Mode Toggle */}
          <div className="ge-controls-bar reveal">
            <div className="ge-search-box">
              <i className="ti ti-search" aria-hidden="true" />
              <input
                type="text"
                className="ge-search-input"
                placeholder="Search by keywords: BESS, Mining, Agriculture, Net-Metering, EV, Mini-Grid..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search green energy solutions"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="ge-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <i className="ti ti-x" />
                </button>
              )}
            </div>

            <div className="ge-view-toggle">
              <button
                type="button"
                className={`ge-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
                title="Grid View"
              >
                <i className="ti ti-layout-grid" />
              </button>
              <button
                type="button"
                className={`ge-view-btn ${viewMode === 'compact' ? 'active' : ''}`}
                onClick={() => setViewMode('compact')}
                aria-label="Compact list view"
                title="Compact List View"
              >
                <i className="ti ti-list" />
              </button>
            </div>
          </div>

          {/* Sector Filter Tabs */}
          <div className="ge-sector-tabs-wrap reveal">
            <div className="ge-sector-tabs" role="tablist" aria-label="Filter solutions by industry sector">
              {GREEN_ENERGY_SECTORS.map((sector) => {
                const count =
                  sector.id === 'all'
                    ? GREEN_ENERGY_SOLUTIONS.length
                    : GREEN_ENERGY_SOLUTIONS.filter((s) => s.sector === sector.id).length;

                return (
                  <button
                    key={sector.id}
                    type="button"
                    role="tab"
                    aria-selected={activeSector === sector.id}
                    className={`ge-sector-tab ${activeSector === sector.id ? 'active' : ''}`}
                    onClick={() => setActiveSector(sector.id)}
                  >
                    <i className={sector.icon} aria-hidden="true" />
                    <span>{sector.name}</span>
                    <span className="ge-sector-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Solutions Grid / Compact View */}
          <div className={`ge-solutions-container ${viewMode === 'compact' ? 'view-compact' : 'view-grid'}`}>
            {filteredSolutions.length > 0 ? (
              filteredSolutions.map((sol) => (
                <article key={sol.id} className="ge-solution-card reveal">
                  <div className="ge-card-glow" aria-hidden="true" />

                  <div className="ge-card-top">
                    <div className="ge-card-icon-bubble">
                      <i className={sol.icon} aria-hidden="true" />
                    </div>
                    <div className="ge-card-meta">
                      <span className="ge-card-num">#{String(sol.num).padStart(2, '0')}</span>
                      <span className="ge-card-badge">{sol.badge}</span>
                    </div>
                  </div>

                  <h3 className="ge-card-title">
                    <Link href={`/green-energy/${sol.slug}`}>
                      {sol.title}
                    </Link>
                  </h3>

                  <p className="ge-card-tagline">{sol.tagline}</p>

                  <p className="ge-card-excerpt">
                    {sol.overview.length > 165 ? `${sol.overview.slice(0, 165)}...` : sol.overview}
                  </p>

                  <div className="ge-card-highlights">
                    <div className="ge-card-highlights-title">Core Capabilities:</div>
                    <ul className="ge-card-checklist">
                      {sol.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx}>
                          <i className="ti ti-check" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {sol.regulatoryNote && (
                    <div className="ge-card-reg-note">
                      <i className="ti ti-info-circle" aria-hidden="true" />
                      <span>{sol.regulatoryNote.length > 95 ? `${sol.regulatoryNote.slice(0, 95)}...` : sol.regulatoryNote}</span>
                    </div>
                  )}

                  <div className="ge-card-footer">
                    <button
                      type="button"
                      className="btn-card-quickview"
                      onClick={() => setQuickViewSolution(sol)}
                    >
                      <i className="ti ti-eye" /> <span>Quick View</span>
                    </button>

                    <Link href={`/green-energy/${sol.slug}`} className="ge-card-detail-link">
                      <span>Full Specs</span>
                      <i className="ti ti-arrow-right" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="ge-no-results">
                <i className="ti ti-filter-off" aria-hidden="true" />
                <h3>No solutions match your criteria</h3>
                <p>Try clearing your search query or selecting a different client sector.</p>
                <button
                  type="button"
                  className="btn-green-outline"
                  onClick={() => {
                    setActiveSector('all');
                    setSearchQuery('');
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── QUICK VIEW MODAL / DRAWER ───────────────────────────────────── */}
      {quickViewSolution && (
        <div className="ge-modal-overlay" onClick={() => setQuickViewSolution(null)}>
          <div className="ge-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="ge-modal-close"
              onClick={() => setQuickViewSolution(null)}
              aria-label="Close modal"
            >
              <i className="ti ti-x" />
            </button>

            <div className="ge-modal-header">
              <div className="ge-modal-icon">
                <i className={quickViewSolution.icon} />
              </div>
              <div>
                <span className="ge-modal-badge">
                  Solution #{String(quickViewSolution.num).padStart(2, '0')} • {quickViewSolution.badge}
                </span>
                <h3 className="ge-modal-title">{quickViewSolution.title}</h3>
                <p className="ge-modal-tagline">{quickViewSolution.tagline}</p>
              </div>
            </div>

            <div className="ge-modal-body">
              <div className="ge-modal-section">
                <h4>Engineering Overview</h4>
                <p>{quickViewSolution.overview}</p>
              </div>

              {quickViewSolution.formula && (
                <div className="ge-modal-callout formula">
                  <i className="ti ti-cpu" />
                  <div>
                    <strong>System Architecture:</strong> {quickViewSolution.formula}
                  </div>
                </div>
              )}

              {quickViewSolution.scale && (
                <div className="ge-modal-callout scale">
                  <i className="ti ti-scale" />
                  <div>
                    <strong>Project Sizing Capacity:</strong> {quickViewSolution.scale}
                  </div>
                </div>
              )}

              <div className="ge-modal-section">
                <h4>Key Applications &amp; Scenarios</h4>
                <div className="ge-modal-apps-grid">
                  {quickViewSolution.applications.map((app, i) => (
                    <div key={i} className="ge-modal-app-pill">
                      <i className="ti ti-check" /> <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {quickViewSolution.regulatoryNote && (
                <div className="ge-modal-reg-note">
                  <i className="ti ti-shield-check" />
                  <div>
                    <strong>Zambia Regulatory &amp; Grid Note:</strong>
                    <p>{quickViewSolution.regulatoryNote}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="ge-modal-footer">
              <Link
                href={`/green-energy/${quickViewSolution.slug}`}
                className="btn-green-outline"
                onClick={() => setQuickViewSolution(null)}
              >
                <span>View Full Dedicated Page</span>
                <i className="ti ti-arrow-right" />
              </Link>
              <a
                href="#energy-assessment-form"
                className="btn-green-primary"
                onClick={() => setQuickViewSolution(null)}
              >
                <i className="ti ti-calculator" />
                <span>Request Assessment</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── 2. INTERACTIVE SOLAR ROI & SIZING CALCULATOR ────────────────── */}
      <section id="solar-calculator-section" className="section-padding section-alt-bg">
        <div className="section-inner">
          <div className="section-header-center reveal">
            <span className="section-badge green">
              <i className="ti ti-calculator" aria-hidden="true" /> Real-Time Energy Modeling
            </span>
            <h2 className="section-title">
              Interactive <span>Solar Sizing &amp; ROI</span> Estimator
            </h2>
            <p className="section-subtitle">
              Simulate required solar PV capacity, battery storage, and financial return tailored for commercial and industrial facilities in Zambia.
            </p>
          </div>

          <div className="reveal">
            <SolarCalculator onApplyEstimate={handleApplyEstimate} />
          </div>
        </div>
      </section>

      {/* ── 3. 8-STEP PROJECT DELIVERY MODEL WITH SCROLL-RESPONSIVE AUTO TOUR ── */}
      <section
        id="project-delivery-model"
        className="section-padding ge-delivery-section"
        ref={deliverySectionRef}
      >
        <div className="section-inner">
          <div className="section-header-center reveal">
            <span className="section-badge green">
              <i className="ti ti-stairs" aria-hidden="true" /> Proven Engineering Methodology
            </span>
            <h2 className="section-title">
              Our 8-Stage <span>Project Delivery Model</span>
            </h2>
            <p className="section-subtitle">
              Continuous end-to-end lifecycle model. Watching the automated stage tour or click any step to explore deliverables.
            </p>
          </div>

          {/* Stepper Navigation Container */}
          <div className="ge-stepper-container reveal">
            <div className="ge-stepper-top-bar">
              <div className="ge-stepper-status">
                <span className={`stepper-live-dot ${isStepperInView && !isUserPaused ? 'animating' : ''}`} />
                <span>
                  Stage <strong>{currentDelivery.step}</strong> of <strong>08</strong>: {currentDelivery.title}
                </span>
                <span className="stepper-mode-tag">
                  {isStepperInView && !isUserPaused ? (
                    <>
                      <i className="ti ti-wind" /> Project Delivery Model
                    </>
                  ) : (
                    <>
                      <i className="ti ti-hand-click" /> Interactive Manual Mode
                    </>
                  )}
                </span>
              </div>

              <div className="ge-stepper-controls">
                <button
                  type="button"
                  className={`ge-tour-toggle-btn ${!isUserPaused ? 'active' : ''}`}
                  onClick={() => setIsUserPaused((prev) => !prev)}
                  aria-label={isUserPaused ? 'Resume auto tour' : 'Pause auto tour'}
                >
                  <i className={`ti ${isUserPaused ? 'ti-player-play' : 'ti-player-pause'}`} />
                  <span>{isUserPaused ? 'Resume Tour' : 'Pause Tour'}</span>
                </button>
              </div>
            </div>

            {/* Stepper Progress Bar Connecting Line */}
            <div className="ge-stepper-progress-track">
              <div
                className="ge-stepper-progress-fill"
                style={{
                  width: `${(activeDeliveryIdx / (PROJECT_DELIVERY_MODEL.length - 1)) * 100}%`
                }}
              />
            </div>

            {/* Step Selector Buttons with Color-Coded States */}
            <div className="ge-stepper-nav" role="tablist">
              {PROJECT_DELIVERY_MODEL.map((step, idx) => {
                const isCompleted = idx < activeDeliveryIdx;
                const isActive = idx === activeDeliveryIdx;
                const isUpcoming = idx > activeDeliveryIdx;

                return (
                  <button
                    key={step.step}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`ge-stepper-btn ${isActive ? 'active in-progress' : isCompleted ? 'completed' : 'upcoming'
                      }`}
                    onClick={() => handleManualStepSelect(step.step)}
                  >
                    <span className="ge-stepper-dot">
                      {isCompleted ? (
                        <i className="ti ti-check dot-completed-icon" aria-hidden="true" />
                      ) : (
                        <i className={step.icon} aria-hidden="true" />
                      )}
                    </span>
                    <span className="ge-stepper-num">
                      {isCompleted ? '✓ Done' : isActive ? '● Active' : step.step}
                    </span>
                    <span className="ge-stepper-title">{step.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Showcase Card with Live Countdown Bar */}
            <div className="ge-step-detail-card">
              {isStepperInView && !isUserPaused && (
                <div className="ge-step-countdown-bar" key={activeDeliveryStep} />
              )}

              <div className="ge-step-detail-header">
                <div className="ge-step-detail-badge">
                  Stage {currentDelivery.step} of 08 • In Progress
                </div>
                <div className="ge-step-icon-huge">
                  <i className={currentDelivery.icon} aria-hidden="true" />
                </div>
              </div>
              <div className="ge-step-detail-content">
                <h3 className="ge-step-main-title">
                  {currentDelivery.step} — {currentDelivery.title}
                </h3>
                <h4 className="ge-step-sub-title">{currentDelivery.subtitle}</h4>
                <p className="ge-step-main-desc">{currentDelivery.desc}</p>

                <div className="ge-step-nav-buttons">
                  <button
                    type="button"
                    className="ge-step-prev-btn"
                    disabled={activeDeliveryStep === '01'}
                    onClick={() => {
                      if (activeDeliveryIdx > 0) {
                        handleManualStepSelect(PROJECT_DELIVERY_MODEL[activeDeliveryIdx - 1].step);
                      }
                    }}
                  >
                    <i className="ti ti-arrow-left" /> Previous Stage
                  </button>
                  <button
                    type="button"
                    className="ge-step-next-btn"
                    disabled={activeDeliveryStep === '08'}
                    onClick={() => {
                      if (activeDeliveryIdx < PROJECT_DELIVERY_MODEL.length - 1) {
                        handleManualStepSelect(PROJECT_DELIVERY_MODEL[activeDeliveryIdx + 1].step);
                      }
                    }}
                  >
                    Next Stage <i className="ti ti-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. REGULATORY, GRID & CLIMATE FINANCE FRAMEWORK ─────────────── */}
      <section id="regulatory-frameworks" className="section-padding section-alt-bg ge-regulatory-section">
        <div className="section-inner">
          <div className="section-header-center reveal">
            <span className="section-badge gold">
              <i className="ti ti-shield-check" aria-hidden="true" /> Regulatory &amp; Climate Finance
            </span>
            <h2 className="section-title">
              Zambian &amp; Regional <span>Policy &amp; Grid Frameworks</span>
            </h2>
            <p className="section-subtitle">
              Maktub operates in strict compliance with Zambian statutory bodies, facilitating utility grid connections, feed-in tariffs, and climate monetization.
            </p>
          </div>

          <div className="ge-regulatory-grid">
            {REGULATORY_FRAMEWORKS.map((item) => (
              <div key={item.id} className="ge-regulatory-card reveal">
                <div className="ge-reg-header">
                  <div className="ge-reg-icon">
                    <i className={item.icon} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="ge-reg-badge">{item.badge}</span>
                    <h3 className="ge-reg-title">{item.title}</h3>
                    <div className="ge-reg-institution">{item.institution}</div>
                  </div>
                </div>

                <p className="ge-reg-desc">{item.desc}</p>

                <div className="ge-reg-checklist">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="ge-reg-check-item">
                      <i className="ti ti-check" aria-hidden="true" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Delivery & Financing Structure Badges */}
          <div className="ge-financing-models-box reveal">
            <h3 className="ge-financing-title">
              Flexible Commercial &amp; Project Delivery Models:
            </h3>
            <div className="ge-financing-pills">
              <span><i className="ti ti-check" /> Direct Turnkey EPC</span>
              <span><i className="ti ti-check" /> Design &amp; Build</span>
              <span><i className="ti ti-check" /> Power Purchase Agreements (PPAs)</span>
              <span><i className="ti ti-check" /> Energy-as-a-Service (EaaS)</span>
              <span><i className="ti ti-check" /> Build-Own-Operate-Transfer (BOOT)</span>
              <span><i className="ti ti-check" /> Public-Private Partnerships (PPPs)</span>
              <span><i className="ti ti-check" /> Long-Term O&amp;M Asset Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. ENERGY AUDITING & ADVISORY APPROACH WITH PROGRESS COLORS ──── */}
      <section id="energy-advisory-approach" className="section-padding ge-advisory-section">
        <div className="section-inner">
          <div className="section-header-center reveal">
            <span className="section-badge green">
              <i className="ti ti-chart-dots" aria-hidden="true" /> Technical Due Diligence
            </span>
            <h2 className="section-title">
              Our 7-Step <span>Energy Advisory Approach</span>
            </h2>
            <p className="section-subtitle">
              Color-coded lifecycle pipeline. Click on any step to explore how we audit, analyze load dynamics, and de-risk your clean energy investment.
            </p>
          </div>

          <div className="ge-approach-flowchart reveal">
            {ADVISORY_APPROACH_STEPS.map((step, idx) => {
              const isCompleted = idx < activeApproachStep;
              const isActive = idx === activeApproachStep;
              const isUpcoming = idx > activeApproachStep;

              return (
                <div
                  key={step.step}
                  className={`ge-approach-node ${isActive ? 'active in-progress' : isCompleted ? 'completed' : 'upcoming'
                    }`}
                  onClick={() => setActiveApproachStep(idx)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="node-status-chip">
                    {isCompleted ? (
                      <span className="chip-completed">✓ Completed</span>
                    ) : isActive ? (
                      <span className="chip-active">● Active</span>
                    ) : (
                      <span className="chip-pending">Step {step.num}</span>
                    )}
                  </div>

                  <div className="ge-node-num">
                    {isCompleted ? '✓' : step.num}
                  </div>
                  <div className="ge-node-title">{step.step}</div>
                  <div className="ge-node-desc">{step.desc}</div>

                  {idx < ADVISORY_APPROACH_STEPS.length - 1 && (
                    <div
                      className={`ge-node-arrow ${isCompleted ? 'completed-arrow' : ''}`}
                      aria-hidden="true"
                    >
                      <i className="ti ti-chevron-right" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Interactive Advisory Detail Blueprint Box */}
          <div className="ge-advisory-blueprint-box reveal">
            <div className="blueprint-header">
              <span className="blueprint-badge">
                Step 0{activeApproachStep + 1} of 07 • {ADVISORY_APPROACH_STEPS[activeApproachStep].step}
              </span>
              <h3 className="blueprint-title">
                Phase Objective: {ADVISORY_APPROACH_STEPS[activeApproachStep].desc}
              </h3>
            </div>
            <div className="blueprint-details-grid">
              <div className="blueprint-col">
                <div className="bp-col-title">
                  <i className="ti ti-scan" /> Technical Scope &amp; Actions
                </div>
                <p>
                  Comprehensive execution of {ADVISORY_APPROACH_STEPS[activeApproachStep].step.toLowerCase()} tasks including data logging, single-line diagram review, and utility tariff matching.
                </p>
              </div>
              <div className="blueprint-col">
                <div className="bp-col-title">
                  <i className="ti ti-file-certificate" /> Deliverables to Client
                </div>
                <p>
                  Formal engineering report, verified energy baseline, PVSyst solar yield simulation, and bankable commercial ROI model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. OUR COMMITMENT MANIFESTO ────────────────────────────────── */}
      <section className="section-padding section-alt-bg ge-commitment-section">
        <div className="section-inner">
          <div className="ge-commitment-card reveal">
            <div className="ge-commitment-glow" aria-hidden="true" />
            <div className="ge-commitment-content">
              <span className="section-badge green light">Our Green Energy Commitment</span>
              <blockquote className="ge-commitment-quote">
                &ldquo;{GREEN_COMMITMENT.quote}&rdquo;
              </blockquote>

              <div className="ge-commitment-pillars">
                {GREEN_COMMITMENT.pillars.map((pillar, i) => (
                  <div key={i} className="ge-pillar-item">
                    <div className="ge-pillar-icon">
                      <i className={pillar.icon} aria-hidden="true" />
                    </div>
                    <span className="ge-pillar-title">{pillar.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. INTERACTIVE ASSESSMENT & QUOTE TOOL ─────────────────────── */}
      <section id="green-energy-quote" className="section-padding">
        <div className="section-inner">
          <div className="section-header-center reveal">
            <span className="section-badge green">
              <i className="ti ti-clipboard-list" aria-hidden="true" /> Fast Engineering Turnaround
            </span>
            <h2 className="section-title">
              Start Your <span>Clean Energy Transition</span>
            </h2>
            <p className="section-subtitle">
              Request an on-site solar assessment, microgrid feasibility study, or industrial PPA consultation.
            </p>
          </div>

          <div className="reveal">
            <GreenEnergyAssessmentForm
              defaultSector={estimateData ? estimateData.sector : ''}
              defaultLoadEstimate={estimateData ? estimateData.loadEstimate : ''}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

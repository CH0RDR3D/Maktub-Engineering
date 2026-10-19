'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import {
  PROJECT_DELIVERY_MODEL,
  REGULATORY_FRAMEWORKS,
  ADVISORY_APPROACH_STEPS
} from '../lib/greenEnergyData';
import GreenEnergyAssessmentForm from './GreenEnergyAssessmentForm';
import SolarCalculator from './SolarCalculator';

const TABS = [
  {
    id: 'solar-calculator-section',
    label: 'Solar ROI Sizing Tool',
    shortLabel: 'Solar Sizing',
    icon: 'ti ti-calculator',
    badge: 'Real-Time Modeling',
    title: 'Interactive Solar Sizing & ROI Estimator',
    subtitle: 'Simulate required solar PV capacity, battery storage, and financial return tailored for commercial and industrial facilities in Zambia.'
  },
  {
    id: 'project-delivery-model',
    label: '8-Stage Delivery Model',
    shortLabel: '8-Stage Delivery',
    icon: 'ti ti-stairs',
    badge: 'Proven Methodology',
    title: 'Our 8-Stage Project Delivery Model',
    subtitle: 'Continuous end-to-end lifecycle model. Watch the automated stage tour or select any step to explore engineering deliverables.'
  },
  {
    id: 'regulatory-frameworks',
    label: 'Zambia Policy & Grid Code',
    shortLabel: 'Policy & Grid Code',
    icon: 'ti ti-shield-check',
    badge: 'Statutory Compliance',
    title: 'Zambian & Regional Policy & Grid Frameworks',
    subtitle: 'Maktub operates in strict compliance with Zambian statutory bodies, facilitating utility grid connections, feed-in tariffs, and climate monetization.'
  },
  {
    id: 'energy-advisory-approach',
    label: '7-Step Advisory Approach',
    shortLabel: 'Advisory Approach',
    icon: 'ti ti-chart-dots',
    badge: 'Due Diligence',
    title: 'Our 7-Step Energy Advisory Approach',
    subtitle: 'Color-coded lifecycle pipeline. Click on any step to explore how we audit, analyze load dynamics, and de-risk your clean energy investment.'
  },
  {
    id: 'green-energy-quote',
    label: 'Request Assessment',
    shortLabel: 'Get Assessment',
    icon: 'ti ti-bolt',
    isQuote: true,
    badge: 'Fast Turnaround',
    title: 'Start Your Clean Energy Transition',
    subtitle: 'Request an on-site solar assessment, microgrid feasibility study, or industrial PPA consultation with our certified engineers.'
  }
];

export default function GreenEnergyClientHub() {
  const [activeTab, setActiveTab] = useState('solar-calculator-section');
  const [activeDeliveryStep, setActiveDeliveryStep] = useState('01');
  const [isStepperInView, setIsStepperInView] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [activeApproachStep, setActiveApproachStep] = useState(0);
  const [estimateData, setEstimateData] = useState(null);

  const deliverySectionRef = useRef(null);
  const userInteractionTimeoutRef = useRef(null);

  const currentTab = useMemo(() => {
    return TABS.find((t) => t.id === activeTab) || TABS[0];
  }, [activeTab]);

  const activeDeliveryIdx = useMemo(() => {
    return PROJECT_DELIVERY_MODEL.findIndex((s) => s.step === activeDeliveryStep);
  }, [activeDeliveryStep]);

  const currentDelivery = useMemo(() => {
    return PROJECT_DELIVERY_MODEL[activeDeliveryIdx] || PROJECT_DELIVERY_MODEL[0];
  }, [activeDeliveryIdx]);

  // Deep-linking hash router (syncs with external anchor links across page)
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && TABS.some((t) => t.id === hash)) {
        setActiveTab(hash);
        const hubEl = document.getElementById('interactive-tools');
        if (hubEl) {
          hubEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
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
  }, [activeTab]);

  // Auto-play delivery model tour when visible
  useEffect(() => {
    let timer;
    if (activeTab === 'project-delivery-model' && isStepperInView && !isUserPaused) {
      timer = setInterval(() => {
        setActiveDeliveryStep((prev) => {
          const currentIdx = PROJECT_DELIVERY_MODEL.findIndex((s) => s.step === prev);
          const nextIdx = (currentIdx + 1) % PROJECT_DELIVERY_MODEL.length;
          return PROJECT_DELIVERY_MODEL[nextIdx].step;
        });
      }, 3800);
    }
    return () => clearInterval(timer);
  }, [activeTab, isStepperInView, isUserPaused]);

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

  // When estimate is generated in calculator, flip to Request Assessment tab
  const handleApplyEstimate = (data) => {
    setEstimateData(data);
    setActiveTab('green-energy-quote');
    window.history.replaceState(null, '', '#green-energy-quote');
    const hubEl = document.getElementById('interactive-tools');
    if (hubEl) {
      hubEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.history.replaceState(null, '', `#${tabId}`);
  };

  return (
    <div id="interactive-tools" className="ge-hub-interactive-wrap py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
      {/* ── WORKSPACE HEADER ── */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
        <div className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-mono text-[#059669] dark:text-[#34d399] bg-[#10b981]/10 px-3.5 py-1.5 border border-[#10b981]/20">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
          <span>[ 07 / TECHNICAL SUITE ]</span>
          <span>&bull;</span>
          <span>INTERACTIVE CLIENT &amp; ENGINEERING TOOLS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-[#141c18] dark:text-white font-editorial-display">
          Clean Energy <span className="italic font-editorial-heading text-[#059669] dark:text-[#34d399]">Workspace</span>
        </h2>
        <p className="text-sm sm:text-base text-[#141c18]/70 dark:text-white/70 font-light leading-relaxed">
          Simulate your solar ROI, audit project delivery stages, verify Zambian Grid Code compliance, or submit your technical assessment request in one cohesive suite.
        </p>
      </div>

      {/* ── TAB SWITCHER SEGMENTED BAR ── */}
      <div className="flex justify-center mb-12 sm:mb-16">
        <div
          className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#e8e4d8] dark:bg-white/10 border border-[#141c18]/15 dark:border-white/15 rounded-full backdrop-blur-md max-w-full overflow-x-auto shadow-sm"
          role="tablist"
          aria-label="Green Energy Technical Tools"
        >
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleTabChange(tab.id)}
                className={`inline-flex items-center space-x-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-[0.18em] transition-all duration-300 border ${
                  isActive
                    ? tab.isQuote
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white border-amber-600 font-semibold shadow-md'
                      : 'bg-[#141c18] dark:bg-white text-white dark:text-[#0e1411] border-[#141c18] dark:border-white font-semibold shadow-md'
                    : tab.isQuote
                    ? 'bg-transparent text-amber-700 dark:text-amber-400 border-transparent hover:bg-amber-500/10 font-semibold'
                    : 'bg-transparent text-[#141c18]/85 dark:text-white/85 border-transparent hover:text-[#059669] dark:hover:text-emerald-400 hover:bg-black/5 dark:hover:bg-white/10 font-medium'
                }`}
              >
                <i className={`${tab.icon} text-sm`} aria-hidden="true" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── TAB HEADER SUMMARY ── */}
      <div className="text-center max-w-2xl mx-auto mb-10 pb-6 border-b border-[#141c18]/10 dark:border-white/10">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#059669] dark:text-[#34d399] block mb-1">
          {currentTab.badge}
        </span>
        <h3 className="text-2xl sm:text-3xl font-light uppercase tracking-tight text-[#141c18] dark:text-white font-editorial-display">
          {currentTab.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#141c18]/70 dark:text-white/70 font-light mt-2">
          {currentTab.subtitle}
        </p>
      </div>

      {/* ── ACTIVE TAB CONTENT PANEL ── */}
      <div className="ge-suite-active-panel">
        {/* TAB 1: SOLAR ROI & SIZING CALCULATOR */}
        {activeTab === 'solar-calculator-section' && (
          <div id="solar-calculator-section" className="animate-fade-in">
            <SolarCalculator onApplyEstimate={handleApplyEstimate} />
          </div>
        )}

        {/* TAB 2: 8-STAGE DELIVERY MODEL */}
        {activeTab === 'project-delivery-model' && (
          <div
            id="project-delivery-model"
            ref={deliverySectionRef}
            className="ge-delivery-section animate-fade-in"
          >
            <div className="ge-stepper-container">
              <div className="ge-stepper-top-bar">
                <div className="ge-stepper-status">
                  <span className={`stepper-live-dot ${isStepperInView && !isUserPaused ? 'animating' : ''}`} />
                  <span>
                    Stage <strong>{currentDelivery.step}</strong> of <strong>08</strong>: {currentDelivery.title}
                  </span>
                  <span className="stepper-mode-tag">
                    {isStepperInView && !isUserPaused ? (
                      <>
                        <i className="ti ti-wind" /> Automated Tour Mode
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

              {/* Stepper Progress Bar */}
              <div className="ge-stepper-progress-track">
                <div
                  className="ge-stepper-progress-fill"
                  style={{
                    width: `${(activeDeliveryIdx / (PROJECT_DELIVERY_MODEL.length - 1)) * 100}%`
                  }}
                />
              </div>

              {/* Step Navigation Buttons */}
              <div className="ge-stepper-nav" role="tablist">
                {PROJECT_DELIVERY_MODEL.map((step, idx) => {
                  const isCompleted = idx < activeDeliveryIdx;
                  const isActive = idx === activeDeliveryIdx;

                  return (
                    <button
                      key={step.step}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`ge-stepper-btn ${isActive ? 'active in-progress' : isCompleted ? 'completed' : 'upcoming'}`}
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

              {/* Active Step Detail Card */}
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
        )}

        {/* TAB 3: REGULATORY & GRID CODE FRAMEWORKS */}
        {activeTab === 'regulatory-frameworks' && (
          <div id="regulatory-frameworks" className="ge-regulatory-section animate-fade-in space-y-10">
            <div className="ge-regulatory-grid">
              {REGULATORY_FRAMEWORKS.map((item) => (
                <div key={item.id} className="ge-regulatory-card">
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
            <div className="ge-financing-models-box">
              <h4 className="ge-financing-title">
                Commercial &amp; Project Delivery Models:
              </h4>
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
        )}

        {/* TAB 4: 7-STEP ENERGY ADVISORY APPROACH */}
        {activeTab === 'energy-advisory-approach' && (
          <div id="energy-advisory-approach" className="ge-advisory-section animate-fade-in space-y-10">
            <div className="ge-approach-flowchart">
              {ADVISORY_APPROACH_STEPS.map((step, idx) => {
                const isCompleted = idx < activeApproachStep;
                const isActive = idx === activeApproachStep;

                return (
                  <div
                    key={step.step}
                    className={`ge-approach-node ${isActive ? 'active in-progress' : isCompleted ? 'completed' : 'upcoming'}`}
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
            <div className="ge-advisory-blueprint-box">
              <div className="blueprint-header">
                <span className="blueprint-badge">
                  Step 0{activeApproachStep + 1} of 07 • {ADVISORY_APPROACH_STEPS[activeApproachStep].step}
                </span>
                <h4 className="blueprint-title">
                  Phase Objective: {ADVISORY_APPROACH_STEPS[activeApproachStep].desc}
                </h4>
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
        )}

        {/* TAB 5: REQUEST ASSESSMENT QUOTE FORM */}
        {activeTab === 'green-energy-quote' && (
          <div id="green-energy-quote" className="animate-fade-in max-w-4xl mx-auto">
            <GreenEnergyAssessmentForm
              defaultSector={estimateData ? estimateData.sector : ''}
              defaultLoadEstimate={estimateData ? estimateData.loadEstimate : ''}
            />
          </div>
        )}
      </div>
    </div>
  );
}

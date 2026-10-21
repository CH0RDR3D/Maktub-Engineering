'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// ── DATA ────────────────────────────────────────────────────────────────────

const HERO_SLIDES = [
  {
    id: 'solar-bess',
    image: '/resources/green-energy/CleanEnergy.webp',
    alt: 'Maktub solar field engineer inspecting renewable infrastructure',
    badge: 'Solar PV · BESS Storage · Microgrids · EPC Delivery',
    tag: 'Solar PV & BESS Storage',
    titleLine1: 'Powering a',
    titleAccent: 'Cleaner, Resilient',
    titleLine3: '& Productive Future.',
    description:
      'Integrated renewable energy and sustainable infrastructure — engineered for commercial enterprises, mines, agriculture, and communities across Zambia and Southern Africa.',
    telemetry: [
      { label: 'Array', value: '1,842 kWp Active', dot: true, color: 'bg-emerald-400' },
      { label: 'Irradiance', value: '984 W/m²', color: 'bg-amber-400' },
      { label: 'ZESCO', value: '50.02 Hz', color: 'bg-emerald-400' },
      { label: 'CO₂ Offset', value: '14.8 T/day', color: 'bg-sky-400' },
    ],
  },
  {
    id: 'commercial-industrial',
    image: '/resources/green-energy/renewables_wind-discord.webp',
    alt: 'Large-scale commercial and industrial solar PV installation in Zambia',
    badge: 'Commercial & Industrial Solar · High-Yield Generation',
    tag: 'Commercial & Industrial',
    titleLine1: 'Decarbonizing',
    titleAccent: 'Commercial Scale',
    titleLine3: '& Industrial Capacity.',
    description:
      'Turnkey rooftop and ground-mounted solar installations for factories, corporate headquarters, and commercial centers across Zambia and SADC.',
    telemetry: [
      { label: 'Grid Tariff Cut', value: 'Up to 75%', dot: true, color: 'bg-emerald-400' },
      { label: 'Daily Yield', value: '9,250 kWh/day', color: 'bg-amber-400' },
      { label: 'Tier-1 BNEF', value: '100% Certified', color: 'bg-emerald-400' },
      { label: 'Payback Est.', value: '3.8 Years', color: 'bg-sky-400' },
    ],
  },
  {
    id: 'mining-hybrid',
    image: '/resources/green-energy/Africa-Energy.jpg',
    alt: 'Wind and solar hybrid renewable energy generation facility',
    badge: 'Hybrid Power Plants · Zero-Downtime Mining Resilience',
    tag: 'Mining & Utility Hybrid',
    titleLine1: 'Engineering',
    titleAccent: 'Hybrid Microgrids',
    titleLine3: '& Mission-Critical Baselines.',
    description:
      'Multi-megawatt hybrid solar, wind, and storage infrastructures built to shield extractive and heavy industry operations from grid intermittency.',
    telemetry: [
      { label: 'Uptime SLA', value: '99.98% Guaranteed', dot: true, color: 'bg-emerald-400' },
      { label: 'Storage Scale', value: '12.4 MWh BESS', color: 'bg-amber-400' },
      { label: 'Sub-Cycle Sync', value: '< 20 ms Transfer', color: 'bg-emerald-400' },
      { label: 'Diesel Burn', value: '-82% Reduced', color: 'bg-sky-400' },
    ],
  },
  {
    id: 'agricultural-solar',
    image: '/resources/green-energy/agrosolari-2.webp',
    alt: 'High-capacity agricultural solar pumping and farm microgrid',
    badge: 'Agricultural Solar · Irrigation Pumping · Rural Energy',
    tag: 'Agricultural Solar Systems',
    titleLine1: 'Empowering',
    titleAccent: 'Agro-Production',
    titleLine3: '& Food Security.',
    description:
      'Direct-drive solar pumps, centre-pivot irrigation power, and cold-storage microgrids driving agricultural yield throughout Chisamba, Mkushi, and Southern Province.',
    telemetry: [
      { label: 'Flow Rate', value: '280 m³/hr Peak', dot: true, color: 'bg-emerald-400' },
      { label: 'Pump Drive', value: 'Direct VFD Solar', color: 'bg-amber-400' },
      { label: 'Diesel Cost', value: 'Zero Dependency', color: 'bg-emerald-400' },
      { label: 'Irrigated Land', value: '450+ Hectares', color: 'bg-sky-400' },
    ],
  },
];

const SLIDE_DURATION = 7000;
const EXIT_TRANSITION_MS = 420;

export default function GreenHero() {
  const containerRef = useRef(null);
  const [step, setStep] = useState(0);
  const [isExitingText, setIsExitingText] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isTabActive, setIsTabActive] = useState(true);
  const [isInViewport, setIsInViewport] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.75], ['0px', '-45px']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  const currentSlide = step % HERO_SLIDES.length;
  const textDirectionClass = step % 2 === 0 ? 'gh-enter-left' : 'gh-enter-right';
  const activeSlide = HERO_SLIDES[currentSlide];

  const preloadNext = useCallback((nextStep) => {
    const nextIdx = nextStep % HERO_SLIDES.length;
    const img = new window.Image();
    img.src = HERO_SLIDES[nextIdx].image;
  }, []);

  // ── SYNCHRONIZED TIMER ENGINE ──────────────────────────────────────────────
  useEffect(() => {
    if (isPaused || !isTabActive || !isInViewport) return;
    const preloadTimer = setTimeout(() => preloadNext(step + 1), SLIDE_DURATION - 2500);
    const exitTimer = setTimeout(() => setIsExitingText(true), SLIDE_DURATION - EXIT_TRANSITION_MS);
    const advanceTimer = setTimeout(() => {
      setStep((prev) => prev + 1);
      setIsExitingText(false);
    }, SLIDE_DURATION);
    return () => {
      clearTimeout(preloadTimer);
      clearTimeout(exitTimer);
      clearTimeout(advanceTimer);
    };
  }, [step, isPaused, isTabActive, isInViewport, preloadNext]);

  // ── TAB VISIBILITY GUARD ───────────────────────────────────────────────────
  useEffect(() => {
    const handleVisibility = () => setIsTabActive(!document.hidden);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  // ── INTERSECTION OBSERVER ──────────────────────────────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ── MANUAL CONTROLS ────────────────────────────────────────────────────────
  const goTo = useCallback((idx) => {
    setIsExitingText(true);
    setTimeout(() => {
      setStep(idx);
      setIsExitingText(false);
    }, EXIT_TRANSITION_MS);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  }, []);

  const handlePrev = () => goTo((currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const handleNext = () => goTo((currentSlide + 1) % HERO_SLIDES.length);

  return (
    <section
      ref={containerRef}
      className="sticky top-0 w-full h-[100svh] min-h-[660px] flex flex-col justify-end overflow-hidden bg-[#060a08] z-0"
      aria-label="Green Energy Hero Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── BACKGROUND: pre-rendered images, CSS crossfade + Ken Burns ── */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ scale: bgScale }}>
        {HERO_SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`gh-bg-image${idx === currentSlide ? ' is-active' : ''}`}
          >
            <Image
              src={s.image}
              alt={s.alt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d09] via-[#060d09]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060d09]/70 via-[#060d09]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d09]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(16,185,129,0.10),transparent)]" />
      </motion.div>

      {/* ── MAIN CONTENT ── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-14 pb-12 sm:pb-16 lg:pb-20 pt-28 pointer-events-auto"
      >
        {/* Eyebrow badge */}
        <div
          key={`badge-${step}`}
          className={`gh-badge-wrap gh-anim-item gh-anim-badge${isExitingText ? ' gh-exiting' : ''}`}
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.22em] bg-emerald-950/70 text-emerald-300 border border-emerald-500/35 backdrop-blur-md font-medium mb-6">
            <i className="ti ti-bolt text-xs text-emerald-400" aria-hidden="true" />
            <span>{activeSlide.badge}</span>
          </div>
        </div>

        {/* Bilateral layout — direction alternates per slide */}
        <div
          key={step}
          className={`gh-bilateral-layout ${textDirectionClass}${isExitingText ? ' gh-exiting' : ''}`}
        >
          {/* Heading block */}
          <div className="gh-heading-block gh-anim-item gh-anim-heading">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-light tracking-[-0.035em] text-white leading-[0.95] uppercase font-editorial-display mb-5">
              {activeSlide.titleLine1}{' '}
              <br />
              <span className="italic font-light font-editorial-heading text-emerald-400">
                {activeSlide.titleAccent}
              </span>{' '}
              <br className="hidden sm:inline" />
              {activeSlide.titleLine3}
            </h1>

            {/* Live telemetry strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono uppercase tracking-wider text-white/75 border-t border-white/15 pt-4 max-w-2xl gh-anim-item">
              {activeSlide.telemetry.map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  {t.dot ? (
                    <span className={`w-1.5 h-1.5 rounded-full ${t.color} animate-ping`} />
                  ) : (
                    <span className="text-emerald-400">•</span>
                  )}
                  <span>
                    {t.label}: <strong className="text-white font-semibold">{t.value}</strong>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action block — opposite side */}
          <div className="gh-action-block gh-anim-item gh-anim-actions">
            <p className="text-sm sm:text-base leading-relaxed text-white/85 font-light mb-6">
              {activeSlide.description}
            </p>
            <div className="gh-cta-group">
              <motion.a
                href="#green-solutions-catalog"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-between px-7 py-4 bg-emerald-400 hover:bg-emerald-300 text-[#060d09] text-xs uppercase tracking-[0.25em] font-bold transition-all duration-300 shadow-lg"
              >
                <span>Explore Solutions</span>
                <i className="ti ti-arrow-right text-sm ml-3 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </motion.a>
              <motion.a
                href="#green-energy-quote"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-7 py-4 border border-white/30 text-white text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-500/15 hover:text-emerald-300 backdrop-blur-sm"
              >
                Request Technical Assessment
              </motion.a>
            </div>
          </div>
        </div>

        {/* ── SLIDE TIMELINE NAVIGATOR ── */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/15">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {HERO_SLIDES.map((s, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goTo(idx)}
                  className="text-left group transition-all duration-300 relative pb-2"
                >
                  <div className="w-full h-[3px] bg-white/15 rounded-full overflow-hidden mb-2.5">
                    {isActive ? (
                      <motion.div
                        key={`bar-${step}-${isPaused}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{
                          duration: isPaused ? 0.3 : SLIDE_DURATION / 1000,
                          ease: 'linear',
                        }}
                        className="h-full bg-emerald-400"
                      />
                    ) : (
                      <div className="h-full w-0 group-hover:w-full bg-white/40 transition-all duration-300" />
                    )}
                  </div>
                  <span
                    className={`text-sm sm:text-base font-light font-editorial-display transition-colors ${
                      isActive ? 'text-emerald-400 font-medium' : 'text-white/80 group-hover:text-white'
                    }`}
                  >
                    0{idx + 1} — {s.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* ── PREV / NEXT ARROWS ── */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 sm:px-6 z-20 pointer-events-none">
        <button
          type="button"
          onClick={handlePrev}
          className="pointer-events-auto w-10 h-10 flex items-center justify-center rounded-full bg-black/40 border border-white/15 backdrop-blur-md text-white/70 hover:text-white hover:border-emerald-400/60 transition-all duration-200"
          aria-label="Previous slide"
        >
          <i className="ti ti-chevron-left text-sm" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="pointer-events-auto w-10 h-10 flex items-center justify-center rounded-full bg-black/40 border border-white/15 backdrop-blur-md text-white/70 hover:text-white hover:border-emerald-400/60 transition-all duration-200"
          aria-label="Next slide"
        >
          <i className="ti ti-chevron-right text-sm" />
        </button>
      </div>
    </section>
  );
}

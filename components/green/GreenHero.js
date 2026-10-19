'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const HERO_SLIDES = [
  {
    id: 'solar-bess',
    image: '/resources/green-energy/man-working-environment-project.webp',
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
    stats: [
      { value: '20+', label: 'Turnkey Solutions' },
      { value: '8', label: 'Delivery Stages' },
      { value: '6+', label: 'Key Sectors' },
      { value: '100%', label: 'ERB Compliant' },
    ],
  },
  {
    id: 'commercial-industrial',
    image: '/resources/green-energy/60056.webp',
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
    stats: [
      { value: '75%', label: 'Max Tariff Cut' },
      { value: '3.8 Yrs', label: 'Est. Payback' },
      { value: '25 Yrs', label: 'Asset Warranty' },
      { value: '0 ZMW', label: 'Peak Diesel Burn' },
    ],
  },
  {
    id: 'mining-hybrid',
    image: '/resources/green-energy/windmills-field.webp',
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
    stats: [
      { value: '99.98%', label: 'Uptime Reliability' },
      { value: '<20ms', label: 'Sub-Cycle Transfer' },
      { value: '50 MWh', label: 'Storage Scale' },
      { value: 'NCC 5', label: 'Govt Accredited' },
    ],
  },
  {
    id: 'agricultural-solar',
    image: '/resources/green-energy/agrosolar.webp',
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
    stats: [
      { value: '280 m³/h', label: 'Peak Water Flow' },
      { value: '450+ Ha', label: 'Irrigated Area' },
      { value: '0 Litres', label: 'Diesel Consumed' },
      { value: '100%', label: 'Off-Grid Autonomy' },
    ],
  },
];

const SLIDE_DURATION = 6000; // 6 seconds per slide

export default function GreenHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Pinned/stuck parallax scroll transform
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // As the following section slides over the hero, hero content gently fades and moves
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.75], ['0px', '-45px']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  // Autosliding timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isPaused, currentSlide]);

  const slide = HERO_SLIDES[currentSlide];

  const handleManualSlide = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
    // Resume auto-slide after 8s idle
    const resumeTimer = setTimeout(() => setIsPaused(false), 8000);
    return () => clearTimeout(resumeTimer);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <section
      ref={containerRef}
      className="sticky top-0 w-full h-[100svh] min-h-[660px] flex flex-col justify-end overflow-hidden bg-[#060a08] z-0"
      aria-label="Green Energy Hero Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── STUCK BACKGROUND IMAGE GALLERY (Cross-fading Auto-Slider) ── */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ scale: bgScale }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Deep cinematic overlay gradient for maximum text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060d09] via-[#060d09]/75 to-[#060d09]/40" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(16,185,129,0.12),transparent)]" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* ── LIVE SYSTEM BADGE (Top-Left) ── */}
      <div className="absolute top-24 sm:top-28 left-6 sm:left-10 lg:left-14 z-20 flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.3em] text-white/80 pointer-events-auto">
        <span className="w-2 h-2 rounded-full bg-emerald-400 green-pulse-dot" />
        <span className="font-semibold text-white">Green Energy Division</span>
        <span className="px-2 py-0.5 border border-emerald-500/40 bg-emerald-500/20 text-emerald-300 font-bold tracking-widest text-[9px]">
          LIVE
        </span>
      </div>

      {/* ── SECTION INDEX & SLIDE CONTROLS (Top-Right) ── */}
      <div className="absolute top-24 sm:top-28 right-6 sm:right-10 lg:right-14 z-20 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.25em] text-white/70 pointer-events-auto">
        <span className="hidden md:inline text-white/60">
          [ 01 / PROLOGUE ] — MAKTUB · VOL. 2026
        </span>
        <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
          <button
            type="button"
            onClick={handlePrev}
            className="text-white/70 hover:text-white p-1 transition-colors"
            aria-label="Previous slide"
          >
            <i className="ti ti-chevron-left text-xs" />
          </button>
          <span className="text-emerald-400 font-bold tracking-wider">
            0{currentSlide + 1} / 0{HERO_SLIDES.length}
          </span>
          <button
            type="button"
            onClick={handleNext}
            className="text-white/70 hover:text-white p-1 transition-colors"
            aria-label="Next slide"
          >
            <i className="ti ti-chevron-right text-xs" />
          </button>
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            className="text-white/70 hover:text-emerald-400 pl-1 ml-1 border-l border-white/15 transition-colors"
            aria-label={isPaused ? 'Resume auto-sliding' : 'Pause auto-sliding'}
          >
            <i className={`ti ${isPaused ? 'ti-player-play' : 'ti-player-pause'} text-xs`} />
          </button>
        </div>
      </div>

      {/* ── MAIN HERO CONTENT (Parallaxes & Fades when Scrolled) ── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-14 pb-12 sm:pb-16 lg:pb-20 pt-28 pointer-events-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
          {/* Left: Dynamic Headline Block */}
          <div className="lg:col-span-8 space-y-6">
            {/* Eyebrow badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${slide.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.22em] bg-emerald-950/70 text-emerald-300 border border-emerald-500/35 backdrop-blur-md font-medium"
              >
                <i className="ti ti-bolt text-xs text-emerald-400" aria-hidden="true" />
                <span>{slide.badge}</span>
              </motion.div>
            </AnimatePresence>

            {/* H1 Heading */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${slide.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-light tracking-[-0.035em] text-white leading-[0.95] uppercase font-editorial-display"
              >
                {slide.titleLine1}{' '}
                <br />
                <span className="italic font-light font-editorial-heading text-emerald-400">
                  {slide.titleAccent}
                </span>{' '}
                <br className="hidden sm:inline" />
                {slide.titleLine3}
              </motion.h1>
            </AnimatePresence>

            {/* Live Telemetry Strip */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`telemetry-${slide.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono uppercase tracking-wider text-white/75 border-t border-white/15 pt-4 max-w-2xl"
              >
                {slide.telemetry.map((t, idx) => (
                  <div key={idx} className="flex items-center gap-2">
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
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Description & Action Buttons */}
          <div className="lg:col-span-4 space-y-6 lg:pl-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${slide.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.45 }}
                className="text-sm sm:text-base leading-relaxed text-white/85 font-light"
              >
                {slide.description}
              </motion.p>
            </AnimatePresence>

            <div className="flex flex-col gap-3 pt-1">
              <motion.a
                href="#green-solutions-catalog"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-between px-7 py-4 bg-emerald-400 hover:bg-emerald-300 text-[#060d09] text-xs uppercase tracking-[0.25em] font-bold overflow-hidden transition-all duration-300 shadow-lg"
              >
                <span>Explore Solutions</span>
                <i className="ti ti-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
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

        {/* ── SLIDE TIMELINE NAVIGATOR (Autoslide Progress Bars) ── */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/15">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {HERO_SLIDES.map((s, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleManualSlide(idx)}
                  className="text-left group transition-all duration-300 relative pb-2"
                >
                  {/* Progress Line */}
                  <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden mb-2.5">
                    {isActive ? (
                      <motion.div
                        key={`bar-${currentSlide}-${isPaused}`}
                        initial={{ width: '0%' }}
                        animate={{ width: isPaused ? '100%' : '100%' }}
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

                  <div className="flex items-baseline justify-between gap-2">
                    <span
                      className={`text-sm sm:text-base font-light font-editorial-display transition-colors ${
                        isActive ? 'text-emerald-400 font-medium' : 'text-white/80 group-hover:text-white'
                      }`}
                    >
                      0{idx + 1} — {s.tag}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

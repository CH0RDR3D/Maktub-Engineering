'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const HERO_SLIDES = [
  {
    id: 'commercial-solar',
    tabLabel: 'Commercial Solar',
    sectorBadge: 'C&I Rooftop & Ground PV',
    headline: 'Commercial Solar PV & Industrial Microgrids',
    location: 'LUSAKA INDUSTRIAL AREA · 15°25′18″S 28°17′00″E',
    statusBadge: 'ZESCO GRID READY // ERB COMPLIANT',
    image: '/resources/green-energy/60056.webp',
    metricVal: '75%',
    metricLabel: 'Peak Tariff Reduction',
  },
  {
    id: 'agricultural-pumping',
    tabLabel: 'Agri-Solar Pumping',
    sectorBadge: 'Productive Agro-Power Systems',
    headline: 'High-Yield Centre Pivot Solar Irrigation',
    location: 'CHISAMBA FARMING BLOCK · 14°58′00″S 28°15′00″E',
    statusBadge: 'ZERO DIESEL DEPENDENCY // 24/7 PRODUCTIVITY',
    image: '/resources/green-energy/agrosolar.webp',
    metricVal: '150kW',
    metricLabel: 'Direct VFD Irrigation Pumping',
  },
  {
    id: 'mining-microgrids',
    tabLabel: 'Mining Microgrids',
    sectorBadge: 'Heavy Industry & Extraction',
    headline: 'Multi-Megawatt Smelter & Mine Hybrid Microgrids',
    location: 'COPPERBELT PROVINCE · 12°48′00″S 28°14′00″E',
    statusBadge: '<20MS DOWNTIME SHIELD // HIGH AVAILABILITY',
    image: '/resources/equipment.webp',
    metricVal: '99.98%',
    metricLabel: 'Power Continuity Uptime',
  },
  {
    id: 'hybrid-renewables',
    tabLabel: 'Wind & Hybrids',
    sectorBadge: 'Utility Hybrid Generation',
    headline: 'Wind, Solar & BESS Regional Generation Facilities',
    location: 'SOUTHERN PROVINCE · 16°30′00″S 27°00′00″E',
    statusBadge: 'DECENTRALIZED GENERATION // 100% CLEAN',
    image: '/resources/green-energy/windmills-field.webp',
    metricVal: '50MWh',
    metricLabel: 'BESS Utility Storage Bank',
  },
];

export default function GreenHero() {
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance hero slides every 6.5s unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveSlideIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeSlide = HERO_SLIDES[activeSlideIdx];

  return (
    <section
      className="relative min-h-[94vh] w-full flex flex-col justify-between pt-24 sm:pt-32 pb-12 lg:pb-16 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── AMBIENT SOLAR AURA GLOWS ── */}
      <div
        className="green-hero-ambient -top-24 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-[#10b981]/20 via-[#059669]/10 to-transparent"
        aria-hidden="true"
      />
      <div
        className="green-hero-ambient top-1/3 -right-24 w-[480px] h-[480px] bg-gradient-to-bl from-[#f59e0b]/15 via-[#10b981]/10 to-transparent"
        aria-hidden="true"
      />

      {/* Top Editorial Index Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#141c18]/15 dark:border-white/15 pb-6 gap-4 relative z-10">
        <div className="flex items-center space-x-3 text-[11px] sm:text-xs uppercase tracking-[0.28em] font-mono text-[#141c18]/70 dark:text-white/70">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] green-pulse-dot" />
          <span>[ 01 / PROLOGUE ]</span>
          <span className="hidden sm:inline text-[#141c18]/30 dark:text-white/30">&mdash;</span>
          <span className="hidden sm:inline">GREEN ENERGY &amp; SUSTAINABLE INFRASTRUCTURE</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] sm:text-xs uppercase tracking-[0.25em] font-mono text-[#141c18]/60 dark:text-white/60">
          <span className="hidden md:inline">MAKTUB ENGINEERING &bull; DIVISION VOL. 2026</span>
          <span className="px-2 py-0.5 border border-[#10b981]/30 bg-[#10b981]/10 text-[#059669] dark:text-[#34d399] font-medium">
            LIVE SYSTEM
          </span>
        </div>
      </div>

      {/* Main Editorial Headline & Asymmetric Layout */}
      <div className="my-auto py-10 lg:py-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Headline Column */}
          <div className="lg:col-span-8 space-y-6 green-anim-slideInLeft">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.22em] bg-[#10b981]/10 text-[#059669] dark:text-[#34d399] border border-[#10b981]/25 backdrop-blur-sm">
              <i className="ti ti-bolt text-xs animate-pulse" aria-hidden="true" />
              <span>Clean Energy &bull; Solar PV &bull; BESS Storage &bull; Microgrids</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.04em] text-[#141c18] dark:text-white leading-[0.94] uppercase font-editorial-display">
              POWERING A <br />
              <span className="italic font-light serif font-editorial-heading text-[#059669] dark:text-[#34d399]">
                Cleaner, More Resilient
              </span>
              <br />
              &amp; PRODUCTIVE FUTURE.
            </h1>

            {/* Simulated Live Grid Telemetry Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono uppercase tracking-wider text-[#141c18]/70 dark:text-white/70 border-t border-[#141c18]/10 dark:border-white/10 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                <span>ARRAY: <strong>1,842 kWp ACTIVE</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#f59e0b]">&bull;</span>
                <span>IRRADIANCE: <strong>984 W/m²</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#10b981]">&bull;</span>
                <span>ZESCO SYNC: <strong>50.02 Hz</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#3b82f6]">&bull;</span>
                <span>CO2 OFFSET: <strong>14.8 T/DAY</strong></span>
              </div>
            </div>
          </div>

          {/* Supporting Text & CTAs (Asymmetric Right Column) */}
          <div className="lg:col-span-4 space-y-6 lg:pl-4 green-anim-fadeInUp">
            <p className="text-sm sm:text-base leading-relaxed text-[#141c18]/80 dark:text-white/80 font-light tracking-wide">
              Maktub Engineering &amp; General Supply Limited provides integrated renewable energy and sustainable infrastructure solutions designed to help commercial enterprises, mines, agriculture, and communities eliminate power downtime and reduce overhead costs across Zambia and Southern Africa.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 pt-1">
              <a
                href="#green-solutions-carousel"
                className="group relative inline-flex items-center justify-between px-8 py-4 bg-[#141c18] dark:bg-white text-white dark:text-[#0e1411] text-xs uppercase tracking-[0.25em] overflow-hidden transition-all duration-300 hover:bg-[#059669] dark:hover:bg-[#34d399]"
              >
                <span className="relative z-10 font-medium">Clean Energy Fleet</span>
                <i className="ti ti-arrow-right relative z-10 text-sm transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                <span className="absolute inset-0 bg-[#059669] dark:bg-[#34d399] translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
              </a>

              <a
                href="#green-energy-quote"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#141c18]/30 dark:border-white/30 text-[#141c18] dark:text-white text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 hover:border-[#10b981] hover:bg-[#10b981]/10 hover:text-[#059669] dark:hover:text-[#34d399]"
              >
                Request Technical Assessment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── DYNAMIC MULTI-SLIDE HERO VISUAL CONTAINER ── */}
      <div className="relative w-full mt-2 group overflow-hidden border border-[#141c18]/15 dark:border-white/15 bg-[#ded9cd]/20 dark:bg-white/5 relative z-10">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
          {HERO_SLIDES.map((slide, sIdx) => {
            const isActive = sIdx === activeSlideIdx;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.headline}
                  fill
                  priority={sIdx === 0}
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  className={`object-cover object-center grayscale-[10%] contrast-[105%] ${isActive ? 'green-ken-burns' : ''
                    }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1411]/85 via-[#0e1411]/30 to-transparent" />
              </div>
            );
          })}

          {/* Dynamic Corner Badges & Location Overlay */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row justify-between items-start sm:items-end text-white gap-4">
            <div className="space-y-1.5 max-w-xl">
              <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#34d399] block font-medium">
                {activeSlide.location}
              </span>
              <p className="text-lg sm:text-2xl font-light tracking-wide uppercase font-editorial-display leading-tight">
                {activeSlide.headline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/90 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/20">
                {activeSlide.statusBadge}
              </div>
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#34d399] bg-[#059669]/30 backdrop-blur-md px-3.5 py-2 border border-[#10b981]/40 font-semibold">
                {activeSlide.metricVal} {activeSlide.metricLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Slide Selector Tabs Bar */}
        <div className="bg-[#141c18] dark:bg-[#070b12] border-t border-white/10 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono uppercase tracking-wider text-white/70">
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
            {HERO_SLIDES.map((slide, sIdx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlideIdx(sIdx)}
                className={`px-3 py-1.5 transition-all text-[11px] flex items-center gap-2 ${activeSlideIdx === sIdx
                    ? 'bg-[#10b981] text-[#0e1411] font-bold shadow-sm'
                    : 'bg-white/5 text-white/70 hover:bg-white/15 hover:text-white'
                  }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${activeSlideIdx === sIdx ? 'bg-[#0e1411]' : 'bg-white/40'}`} />
                <span>{slide.tabLabel}</span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 text-[10px] text-white/50 tracking-widest">
            <span>ROTATION: 6.5S AUTO</span>
            <span className="w-1 h-1 rounded-full bg-[#10b981]" />
            <span>PAUSED ON HOVER</span>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Metrics Strip */}
      <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-[#141c18]/15 dark:border-white/15 pb-8 text-xs uppercase tracking-[0.2em] font-mono text-[#141c18]/70 dark:text-white/70 relative z-10">
        <div className="hover:text-[#059669] dark:hover:text-[#34d399] transition-colors">
          <span className="text-2xl sm:text-3xl font-light text-[#141c18] dark:text-white block font-editorial-display">20</span>
          <span>Energy Solutions</span>
        </div>
        <div className="hover:text-[#059669] dark:hover:text-[#34d399] transition-colors">
          <span className="text-2xl sm:text-3xl font-light text-[#141c18] dark:text-white block font-editorial-display">8</span>
          <span>Delivery Stages</span>
        </div>
        <div className="hover:text-[#059669] dark:hover:text-[#34d399] transition-colors">
          <span className="text-2xl sm:text-3xl font-light text-[#141c18] dark:text-white block font-editorial-display">6+</span>
          <span>Key Economic Sectors</span>
        </div>
        <div className="hover:text-[#059669] dark:hover:text-[#34d399] transition-colors">
          <span className="text-2xl sm:text-3xl font-light text-[#141c18] dark:text-white block font-editorial-display">100%</span>
          <span>ERB &amp; ZESCO Compliant</span>
        </div>
      </div>
    </section>
  );
}


'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CAROUSEL_SOLUTIONS = [
  {
    id: 'ci-solar-500kw',
    title: 'Commercial Rooftop Solar PV',
    category: 'Commercial & Industrial',
    badge: 'Tier-1 C&I EPC',
    scale: '50kW – 20MW+ Rooftop & Ground',
    highlight: 'Up to 75% Grid Tariff Reduction',
    location: 'Lusaka & Regional Commercial Hubs',
    image: '/resources/green-energy/60056.webp',
    ctaLink: '#green-energy-quote',
  },
  {
    id: 'agri-pivot-150kw',
    title: 'Agricultural Solar Irrigation & Pumping',
    category: 'Agribusiness & Food Security',
    badge: 'Direct VFD Driven',
    scale: '5.5kW – 150kW Centre Pivots',
    highlight: 'Zero Diesel Fuel Dependency',
    location: 'Chisamba, Mkushi & Southern Farmlands',
    image: '/resources/green-energy/agrosolar.webp',
    ctaLink: '#green-energy-quote',
  },
  {
    id: 'mining-hybrid-10mw',
    title: 'Mining & Smelter Hybrid Microgrids',
    category: 'Heavy Industry & Extraction',
    badge: 'Copperbelt High Availability',
    scale: '1MW – 100MW Hybrid Facilities',
    highlight: '99.98% Uninterrupted Power Delivery',
    location: 'Kitwe, Ndola & Solwezi Corridors',
    image: '/resources/equipment.webp',
    ctaLink: '#green-energy-quote',
  },
  {
    id: 'bess-storage-2mwh',
    title: 'Industrial Lithium BESS Energy Storage',
    category: 'Grid Support & Resilience',
    badge: '<20ms Sub-Cycle Transfer',
    scale: '50kWh – 50MWh LiFePO4 Systems',
    highlight: 'Load Shedding Shield & Peak Shaving',
    location: 'Industrial Estates & Mining Camps',
    image: '/resources/green-energy/solar-graphic.webp',
    ctaLink: '#green-energy-quote',
  },
  {
    id: 'utility-hybrid-wind',
    title: 'Wind & Solar Hybrid Power Generation',
    category: 'Utility & Renewable Generation',
    badge: 'ZESCO Grid Code Compliant',
    scale: 'Multi-Technology Generation',
    highlight: 'High Capacity Factor & Baseload Balance',
    location: 'Southern & Central Provinces',
    image: '/resources/green-energy/windmills-field.webp',
    ctaLink: '#green-energy-quote',
  },
  {
    id: 'offgrid-community',
    title: 'Decentralized Community Mini-Grids',
    category: 'Rural Electrification',
    badge: 'Smart PayGo Ready',
    scale: '20kW – 500kW Community Grids',
    highlight: '24/7 Clean Power for Rural Economies',
    location: 'Luapula, Northern & Western Districts',
    image: '/resources/green-energy/africalightbulb.webp',
    ctaLink: '#green-energy-quote',
  },
  {
    id: 'epc-engineering-supervision',
    title: 'Turnkey Clean Energy EPC Management',
    category: 'Professional Engineering',
    badge: 'EIZ & NCC Registered',
    scale: 'End-to-End Design & Build',
    highlight: 'Feasibility, Geotechnical, Build & O&M',
    location: 'Nationwide & Regional SADC',
    image: '/resources/green-energy/man-working-environment-project.webp',
    ctaLink: '#green-energy-quote',
  },
  {
    id: 'power-quality-harmonics',
    title: 'Power Quality & Harmonic Filtration',
    category: 'Industrial Electrical Works',
    badge: 'IEEE 519 Compliant',
    scale: 'Active Power Factor Correction',
    highlight: 'Eliminates ZESCO kVA Billing Surcharges',
    location: 'Manufacturing & Heavy Commercial Sites',
    image: '/resources/green-energy/green-energy-message.webp',
    ctaLink: '#green-energy-quote',
  },
  {
    id: 'telecom-tower-microgrids',
    title: 'Off-Grid Telecom Tower Power Plants',
    category: 'Critical Infrastructure',
    badge: 'Remote SCADA Telemetry',
    scale: 'DC Solar + Lithium Hybrid Sites',
    highlight: '99.995% Network Base Station Uptime',
    location: 'Remote Highway & Rural Corridors',
    image: '/resources/green-energy/solar-graphic.webp',
    ctaLink: '#green-energy-quote',
  },
  {
    id: 'cold-storage-agro',
    title: 'Solar-Powered Cold Storage Warehousing',
    category: 'Agricultural Cold Chain',
    badge: 'Thermal & Li-Ion Hybrid',
    scale: '10T – 200T Post-Harvest Storage',
    highlight: 'Eliminates Post-Harvest Vegetable Losses',
    location: 'Horticultural & Dairy Farming Hubs',
    image: '/resources/green-energy/agrosolar.webp',
    ctaLink: '#green-energy-quote',
  },
];

export default function GreenSolutionsCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleScrollManual = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === 'left' ? -380 : 380;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section
      id="green-solutions-carousel"
      className="py-16 sm:py-24 border-t border-[#141c18]/15 dark:border-white/15 bg-[#f6f4ed]/50 dark:bg-[#070b12]/50 relative overflow-hidden"
    >
      {/* Background Ambient Aura */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#10b981]/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 mb-10">
        {/* Header & Controls Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-mono text-[#141c18]/70 dark:text-white/70">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>[ 02 / FLEET CAROUSEL ]</span>
              <span>&bull;</span>
              <span>CLEAN ENERGY ASSET SPECTRUM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light uppercase tracking-tight text-[#141c18] dark:text-white font-editorial-display">
              Turnkey Clean Energy{' '}
              <span className="italic font-editorial-heading text-[#059669] dark:text-[#34d399]">
                Installations &amp; Assets
              </span>
            </h2>
            <p className="max-w-2xl text-xs sm:text-sm text-[#141c18]/70 dark:text-white/70 font-light leading-relaxed">
              Continuous live stream of our Tier-1 commercial solar arrays, agricultural irrigation plants, BESS storage banks, and heavy industrial microgrids deployed across Zambia.
            </p>
          </div>

          {/* Interactive Stream & Scroll Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-[11px] font-mono uppercase tracking-[0.2em] border border-[#141c18]/20 dark:border-white/20 hover:border-[#10b981] text-[#141c18] dark:text-white transition-all bg-white/60 dark:bg-black/30 backdrop-blur-sm"
              aria-label={isPaused ? 'Resume infinite stream' : 'Pause infinite stream'}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-amber-500' : 'bg-[#10b981] animate-pulse'}`} />
              <span>{isPaused ? 'Resume Stream' : 'Pause Stream'}</span>
            </button>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => handleScrollManual('left')}
                className="w-9 h-9 flex items-center justify-center border border-[#141c18]/20 dark:border-white/20 hover:border-[#10b981] hover:bg-[#10b981]/10 text-[#141c18] dark:text-white transition-all"
                aria-label="Scroll left"
              >
                <i className="ti ti-chevron-left text-sm" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => handleScrollManual('right')}
                className="w-9 h-9 flex items-center justify-center border border-[#141c18]/20 dark:border-white/20 hover:border-[#10b981] hover:bg-[#10b981]/10 text-[#141c18] dark:text-white transition-all"
                aria-label="Scroll right"
              >
                <i className="ti ti-chevron-right text-sm" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTINUOUS INFINITE CAROUSEL TRACK ── */}
      <div
        ref={scrollContainerRef}
        className="green-carousel-wrapper overflow-x-auto scrollbar-none"
      >
        <div className={`green-carousel-track ${isPaused ? 'is-paused' : ''}`}>
          {/* Double array ensures seamless, gapless 360-degree marquee loop */}
          {[...CAROUSEL_SOLUTIONS, ...CAROUSEL_SOLUTIONS].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="green-carousel-card group border border-[#141c18]/15 dark:border-white/15 bg-white/80 dark:bg-[#0c1219]/90 backdrop-blur-md overflow-hidden flex flex-col justify-between"
            >
              {/* Card Image Frame with Hover Zoom & Spec Badges */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ded9cd]/30 dark:bg-white/5 border-b border-[#141c18]/10 dark:border-white/10">
                <Image
                  src={item.image}
                  alt={`${item.title} - Maktub Green Energy Installation`}
                  fill
                  sizes="(max-width: 640px) 290px, 340px"
                  className="object-cover object-center grayscale-[10%] contrast-[105%] transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Top Corner Badge Pill */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.2em] bg-black/70 text-[#34d399] border border-[#10b981]/30 backdrop-blur-md">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Corner Scale Spec */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white/90 text-[10px] font-mono tracking-wider">
                  <span className="truncate max-w-[200px]">{item.scale}</span>
                  <i className="ti ti-bolt text-[#34d399]" aria-hidden="true" />
                </div>
              </div>

              {/* Card Body & Technical Metadata */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#059669] dark:text-[#34d399] block">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-light uppercase tracking-tight text-[#141c18] dark:text-white font-editorial-display group-hover:text-[#059669] dark:group-hover:text-[#34d399] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="pt-1 flex items-center gap-1.5 text-xs text-[#141c18]/80 dark:text-white/80 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0" />
                    <span>{item.highlight}</span>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-3 border-t border-[#141c18]/10 dark:border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#141c18]/50 dark:text-white/50 uppercase tracking-widest truncate max-w-[170px]">
                    {item.location}
                  </span>
                  <a
                    href={item.ctaLink}
                    className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-[0.2em] text-[#141c18] dark:text-white font-medium hover:text-[#059669] dark:hover:text-[#34d399] transition-colors"
                  >
                    <span>Deploy</span>
                    <i className="ti ti-arrow-right text-xs" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GREEN_ENERGY_SOLUTIONS } from '../../lib/greenEnergyData';

const categories = [
  { id: 'all', label: 'All Solutions' },
  { id: 'commercial-industrial', label: 'Commercial & Industrial' },
  { id: 'mining', label: 'Mining & Heavy Industry' },
  { id: 'agriculture', label: 'Agriculture & Food' },
  { id: 'communities-offgrid', label: 'Off-Grid & Mini-Grids' },
  { id: 'epc-advisory', label: 'EPC & Advisory' },
];

const SOLUTION_IMAGE_MAP = {
  'commercial-industrial': '/resources/green-energy/60056.webp',
  'mining': '/resources/equipment.webp',
  'agriculture': '/resources/green-energy/agrosolar.webp',
  'communities-offgrid': '/resources/green-energy/africalightbulb.webp',
  'epc-advisory': '/resources/green-energy/green-energy-message.webp',
  'government-public': '/resources/green-energy/man-working-environment-project.webp',
  'telecommunications': '/resources/green-energy/solar-graphic.webp',
};

const SPECIFIC_SOLUTION_IMAGE_MAP = {
  'commercial-industrial-solar': '/resources/green-energy/60056.webp',
  'battery-storage-bess': '/resources/green-energy/solar-graphic.webp',
  'hybrid-power-systems': '/resources/green-energy/windmills-field.webp',
  'agricultural-solar': '/resources/green-energy/agrosolar.webp',
  'mining-microgrids': '/resources/equipment.webp',
  'energy-efficiency-power-quality': '/resources/green-energy/solar-graphic.webp',
  'operations-maintenance-monitoring': '/resources/green-energy/man-working-environment-project.webp',
  'clean-energy-advisory-feasibility': '/resources/green-energy/green-energy-message.webp',
  'green-hydrogen-future-fuels': '/resources/green-energy/windmills-field.webp',
};

function getSolutionImage(item) {
  return SPECIFIC_SOLUTION_IMAGE_MAP[item.id] ||
    SOLUTION_IMAGE_MAP[item.sector] ||
    '/resources/green-energy/60056.webp';
}

export default function GreenProducts() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSolutions =
    activeCategory === 'all'
      ? GREEN_ENERGY_SOLUTIONS.slice(0, 9)
      : GREEN_ENERGY_SOLUTIONS.filter((s) => s.sector === activeCategory);

  return (
    <section id="green-solutions-catalog" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto border-t border-[#141c18]/15 dark:border-white/15">
      {/* Header & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-mono text-[#141c18]/60 dark:text-white/60">
            <span>[ 04 / SOLUTIONS ]</span>
            <span>&bull;</span>
            <span>TURNKEY ENERGY ASSETS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-[#141c18] dark:text-white font-editorial-display">
            Featured <span className="italic font-editorial-heading text-[#059669] dark:text-[#34d399]">Solutions</span>
          </h2>
        </div>

        {/* Categories Tab Pill Strip */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase font-mono tracking-[0.2em] transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-[#141c18] dark:bg-white text-white dark:text-[#0e1411] border-[#141c18] dark:border-white'
                  : 'bg-transparent text-[#141c18]/70 dark:text-white/70 border-[#141c18]/20 dark:border-white/20 hover:border-[#141c18] dark:hover:border-white hover:text-[#141c18] dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Products / Solutions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {filteredSolutions.map((item) => (
          <article
            key={item.id}
            className="group flex flex-col justify-between border-b border-[#141c18]/15 dark:border-white/15 pb-6 transition-all duration-300"
          >
            {/* Image Container with Hover Quick-Action */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#ded9cd]/30 dark:bg-white/5 border border-[#141c18]/15 dark:border-white/15 mb-6">
              <Image
                src={getSolutionImage(item)}
                alt={`${item.title} - Maktub Green Energy Solution`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center grayscale-[10%] group-hover:grayscale-0 transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Tag Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-block px-2.5 py-1 text-[9px] font-mono uppercase tracking-[0.2em] bg-[#faf9f5]/90 dark:bg-[#141c18]/90 text-[#141c18] dark:text-white backdrop-blur-sm border border-[#141c18]/10 dark:border-white/10">
                  {item.badge}
                </span>
              </div>

              {/* Quick Action Slide-Up Drawer Button on Hover */}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                <Link
                  href={`/green-energy/${item.slug}`}
                  className="w-full py-3 bg-[#141c18]/95 dark:bg-white/95 hover:bg-[#059669] dark:hover:bg-[#34d399] text-white dark:text-[#0e1411] backdrop-blur-sm text-[11px] font-mono uppercase tracking-[0.25em] transition-colors flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Inspect Technical Specs</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Product Meta Info */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-[#141c18]/60 dark:text-white/60">
                <span className="truncate max-w-[200px]">{item.scale}</span>
                <span className="text-[#059669] dark:text-[#34d399] font-medium">#{item.num}</span>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <h3 className="text-xl sm:text-2xl font-light uppercase tracking-tight text-[#141c18] dark:text-white group-hover:text-[#059669] dark:group-hover:text-[#34d399] transition-colors duration-200 font-editorial-display">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs text-[#141c18]/70 dark:text-white/70 line-clamp-2 font-light leading-relaxed pt-1">
                {item.tagline}
              </p>

              <div className="pt-3">
                <Link
                  href={`/green-energy/${item.slug}`}
                  className="text-xs font-mono uppercase tracking-[0.2em] text-[#059669] dark:text-[#34d399] inline-flex items-center space-x-1 hover:underline"
                >
                  <span>Detailed Overview</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Catalog Footer Bar */}
      <div className="mt-16 text-center">
        <a
          href="#green-energy-quote"
          className="inline-flex items-center space-x-3 px-8 py-4 border border-[#141c18]/30 dark:border-white/30 hover:border-[#10b981] text-xs font-mono uppercase tracking-[0.25em] text-[#141c18] dark:text-white transition-all hover:bg-[#10b981]/10 group"
        >
          <span>Request Customized Multi-Megawatt Technical Proposal</span>
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </a>
      </div>
    </section>
  );
}

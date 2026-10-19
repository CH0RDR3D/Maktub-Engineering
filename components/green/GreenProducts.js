'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { GREEN_ENERGY_SOLUTIONS } from '../../lib/greenEnergyData';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'commercial-industrial', label: 'Commercial & Industrial' },
  { id: 'mining', label: 'Mining' },
  { id: 'agriculture', label: 'Agriculture' },
  { id: 'communities-offgrid', label: 'Off-Grid' },
  { id: 'epc-advisory', label: 'EPC & Advisory' },
];

const SOLUTION_IMAGE_MAP = {
  'commercial-industrial': '/resources/green-energy/60056.webp',
  mining: '/resources/equipment.webp',
  agriculture: '/resources/green-energy/agrosolar.webp',
  'communities-offgrid': '/resources/green-energy/africalightbulb.webp',
  'epc-advisory': '/resources/green-energy/man-working-environment-project.webp',
  'government-public': '/resources/green-energy/man-working-environment-project.webp',
  telecommunications: '/resources/green-energy/windmills-field.webp',
};

const SPECIFIC_SOLUTION_IMAGE_MAP = {
  'commercial-industrial-solar': '/resources/green-energy/60056.webp',
  'battery-storage-bess': '/resources/green-energy/solarstand.webp',
  'hybrid-power-systems': '/resources/green-energy/windmills-field.webp',
  'agricultural-solar': '/resources/green-energy/agrosolar.webp',
  'mining-microgrids': '/resources/equipment.webp',
  'energy-efficient-infrastructure': '/resources/green-energy/eco light bulb.webp',
  'smart-energy-management': '/resources/green-energy/solar grahic.webp',
  'operations-maintenance': '/resources/green-energy/soalrengineers.webp',
  'energy-auditing-advisory': '/resources/green-energy/man-working-environment-project.webp',
  'solar-minigrids-rural': '/resources/green-energy/ruralsolar.webp',
  'solar-street-lighting': '/resources/green-energy/communitysolared.webp',
  'solar-water-wastewater': '/resources/green-energy/womanwitsolar.webp',
  'renewable-project-development': '/resources/green-energy/top-view-paper-with-green-energy-message.webp',
  'epc-turnkey-delivery': '/resources/green-energy/soalrengineers.webp',
  'carbon-sustainability': '/resources/green-energy/savetheworld.webp',
  'telecom-clean-energy': '/resources/green-energy/windmills-field.webp',
};

function getSolutionImage(item) {
  return (
    SPECIFIC_SOLUTION_IMAGE_MAP[item.id] ||
    SOLUTION_IMAGE_MAP[item.sector] ||
    '/resources/green-energy/60056.webp'
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 },
  }),
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};

export default function GreenProducts() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSolutions =
    activeCategory === 'all'
      ? GREEN_ENERGY_SOLUTIONS.slice(0, 9)
      : GREEN_ENERGY_SOLUTIONS.filter((s) => s.sector === activeCategory);

  return (
    <section
      id="green-solutions-catalog"
      className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 max-w-[1400px] mx-auto border-t border-[#141c18]/15 dark:border-white/10"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8"
      >
        <div className="space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#141c18]/50 dark:text-white/40">
            [ 04 / SOLUTIONS ] · TURNKEY ENERGY ASSETS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-[#141c18] dark:text-white font-editorial-display">
            Featured{' '}
            <span className="italic font-editorial-heading text-[#059669] dark:text-emerald-400">
              Solutions
            </span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-[11px] uppercase font-mono tracking-[0.18em] transition-all duration-200 border ${
                activeCategory === cat.id
                  ? 'bg-[#141c18] dark:bg-white text-white dark:text-[#0d1410] border-[#141c18] dark:border-white font-bold shadow-sm'
                  : 'bg-transparent text-[#141c18]/80 dark:text-white/80 border-[#141c18]/20 dark:border-white/20 hover:border-[#059669] dark:hover:border-emerald-400 hover:text-[#059669] dark:hover:text-emerald-400 font-medium'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Solutions grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredSolutions.map((item, i) => (
            <motion.article
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              custom={i}
              layout
              className="group flex flex-col border border-[#141c18]/10 dark:border-white/10 bg-[#faf9f5] dark:bg-[#0d1410] hover:border-[#059669]/25 dark:hover:border-emerald-500/25 transition-all duration-400 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={getSolutionImage(item)}
                  alt={`${item.title} — Maktub Green Energy`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  unoptimized
                />
                {/* Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-block px-2.5 py-1 text-[9px] font-mono uppercase tracking-[0.2em] bg-white/90 dark:bg-[#0d1410]/90 text-[#141c18] dark:text-white backdrop-blur-sm border border-[#141c18]/10 dark:border-white/10">
                    {item.badge}
                  </span>
                </div>

                {/* Hover CTA */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                  <Link
                    href={`/green-energy/${item.slug}`}
                    className="w-full py-3 bg-[#141c18]/95 dark:bg-white/95 hover:bg-[#059669] dark:hover:bg-emerald-400 text-white dark:text-[#0d1410] text-[11px] font-mono uppercase tracking-[0.25em] transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Inspect Specs</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.18em]">
                  <span className="text-[#141c18]/70 dark:text-white/65 truncate max-w-[65%] font-medium">{item.scale || '—'}</span>
                  <span className="text-[#059669] dark:text-emerald-400 font-bold">#{String(item.num).padStart(2, '0')}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-light uppercase tracking-tight text-[#141c18] dark:text-white group-hover:text-[#059669] dark:group-hover:text-emerald-400 transition-colors duration-200 font-editorial-display leading-tight">
                  {item.shortTitle || item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#141c18]/80 dark:text-white/75 line-clamp-2 font-light leading-relaxed">
                  {item.tagline}
                </p>

                <div className="pt-2 border-t border-[#141c18]/8 dark:border-white/8">
                  <Link
                    href={`/green-energy/${item.slug}`}
                    className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#059669] dark:text-emerald-400 inline-flex items-center gap-1.5 hover:gap-3 transition-all duration-200"
                  >
                    <span>Detailed Overview</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* CTA footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-14 text-center"
      >
        <a
          href="#green-energy-quote"
          className="inline-flex items-center gap-4 px-8 py-4 border border-[#141c18]/20 dark:border-white/20 hover:border-[#059669] dark:hover:border-emerald-500 text-xs font-mono uppercase tracking-[0.25em] text-[#141c18] dark:text-white transition-all hover:bg-emerald-500/8 group"
        >
          <span>Request a Multi-Megawatt Technical Proposal</span>
          <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
        </a>
      </motion.div>
    </section>
  );
}

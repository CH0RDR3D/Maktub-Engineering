'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
};

const sectors = [
  {
    id: '01',
    title: 'Commercial & Industrial Solar',
    subtitle: 'High-Yield Generation',
    description:
      'Turnkey rooftop and ground-mounted solar PV for factories, warehouses, and corporate campuses. Engineered to cut grid tariffs and eliminate diesel burn.',
    scale: '20 kW – 20 MW+',
    image: '/resources/green-energy/renewableenergy.avif',
    tag: 'C&I Solar',
    anchor: '/green-energy/commercial-industrial-solar',
    featured: true,
  },
  {
    id: '02',
    title: 'Mining & Heavy Industry',
    subtitle: 'Zero-Downtime Resilience',
    description:
      'Multi-megawatt hybrid power plants for extractive operations across the Copperbelt and Southern Africa.',
    scale: '1 MW – 100 MW+',
    image: '/resources/green-energy/renewables_africa-discord002.webp',
    tag: 'Mining & Industry',
    anchor: '/green-energy/mining-heavy-industry',
  },
  {
    id: '03',
    title: 'Agricultural Solar',
    subtitle: 'Productive Agro-Power',
    description:
      'High-capacity solar pumping for centre pivots, drip irrigation, cold storage, and rural farm microgrids.',
    scale: '5.5 kW – 150 kW+',
    image: '/resources/green-energy/residentialsoalr.webp',
    tag: 'Agriculture',
    anchor: '/green-energy/solar-agriculture',
  },
  {
    id: '04',
    title: 'Community & Off-Grid',
    subtitle: 'Rural Electrification',
    description:
      'Solar mini-grids and productive-use energy systems bringing reliable power to underserved communities.',
    scale: '5 kW – 500 kW+',
    image: '/resources/green-energy/ruralsolar.webp',
    tag: 'Off-Grid',
    anchor: '/green-energy/solar-minigrids-rural',
  },
];

export default function GreenCollections() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-10 lg:px-14 max-w-[1400px] mx-auto border-t border-[#141c18]/15 dark:border-white/10">
      {/* Section header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6"
      >
        <div className="space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#141c18]/50 dark:text-white/40">
            [ 02 / SOLUTION SECTORS ]
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-[#141c18] dark:text-white font-editorial-display">
            Clean Energy{' '}
            <span className="italic font-editorial-heading text-[#059669] dark:text-emerald-400">
              Sectors
            </span>
          </h2>
        </div>
        <a
          href="#green-solutions-catalog"
          className="group text-xs font-mono uppercase tracking-[0.22em] text-[#141c18]/60 dark:text-white/50 inline-flex items-center gap-2 hover:text-[#059669] dark:hover:text-emerald-400 transition-colors shrink-0"
        >
          View all solutions
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {sectors.map((item, index) => {
          const isFeatured = item.featured;
          return (
            <motion.article
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              custom={index * 0.15}
              className={`group relative flex flex-col overflow-hidden border border-[#141c18]/15 dark:border-white/10 bg-white dark:bg-[#0d1410] shadow-sm transition-all duration-500 hover:border-[#059669]/40 dark:hover:border-emerald-500/40 hover:-translate-y-1 ${
                isFeatured ? 'lg:col-span-7' : 'lg:col-span-5 first:lg:col-span-7'
              }`}
            >
              {/* Image */}
              <div className={`relative w-full overflow-hidden ${isFeatured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes={isFeatured ? '(max-width: 1024px) 100vw, 58vw' : '(max-width: 1024px) 100vw, 42vw'}
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  unoptimized
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Tag badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] bg-white/95 dark:bg-[#141c18]/95 text-[#141c18] dark:text-white border border-[#141c18]/15 dark:border-white/15 backdrop-blur-sm font-semibold">
                    {item.tag}
                  </span>
                </div>

                {/* Index badge */}
                <div className="absolute top-4 right-4 z-10 text-[11px] font-mono text-white bg-black/60 px-2.5 py-1 backdrop-blur-sm border border-white/20">
                  [{item.id}]
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 lg:p-7 space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em]">
                  <span className="text-[#141c18]/70 dark:text-white/65 font-medium">{item.subtitle}</span>
                  <span className="text-[#059669] dark:text-emerald-400 font-bold">{item.scale}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3
                    className={`font-light uppercase tracking-tight text-[#141c18] dark:text-white group-hover:text-[#059669] dark:group-hover:text-emerald-400 transition-colors duration-300 font-editorial-display ${
                      isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <a
                    href={item.anchor}
                    className="text-xl text-[#141c18]/60 dark:text-white/60 group-hover:text-[#059669] dark:group-hover:text-emerald-400 transform group-hover:translate-x-1 transition-all duration-300 shrink-0 mt-1"
                    aria-label={`View ${item.title}`}
                  >
                    →
                  </a>
                </div>

                <p className="text-sm sm:text-base text-[#141c18]/80 dark:text-white/75 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
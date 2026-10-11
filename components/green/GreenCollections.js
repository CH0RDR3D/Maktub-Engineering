'use client';

import Image from 'next/image';

const sectors = [
  {
    id: '01',
    title: 'Commercial & Industrial Solar',
    subtitle: 'High-Yield Generation',
    description:
      'Turnkey rooftop and ground-mounted solar PV systems for factories, manufacturing facilities, warehouses, and corporate headquarters. Engineered to dramatically cut grid tariffs and eliminate diesel generator fuel burn.',
    scale: '20kW – 20MW+ Scale',
    image: '/resources/green-energy/60056.webp',
    aspect: 'aspect-[3/4]',
    tag: 'Commercial & Industrial',
    anchor: 'commercial-industrial-solar',
  },
  {
    id: '02',
    title: 'Mining & Heavy Industry Microgrids',
    subtitle: 'Zero-Downtime Resilience',
    description:
      'Multi-megawatt hybrid power plants and high-availability power infrastructure tailored for extractive operations and smelters across the Zambian Copperbelt and Southern Africa.',
    scale: '1MW – 100MW+ Scale',
    image: '/resources/equipment.webp',
    aspect: 'aspect-[4/5]',
    tag: 'Mining & Heavy Industry',
    anchor: 'mining-microgrids',
  },
  {
    id: '03',
    title: 'Agricultural Solar & Agribusiness',
    subtitle: 'Productive Agro-Power',
    description:
      'High-capacity solar water pumping for centre pivots, drip irrigation, cold storage warehouses, grain milling, and rural farm microgrids to climate-proof agricultural yield.',
    scale: '5.5kW – 150kW+ Pumping',
    image: '/resources/green-energy/agrosolar.webp',
    aspect: 'aspect-[3/4]',
    tag: 'Agriculture & Food Systems',
    anchor: 'agricultural-solar',
  },
  {
    id: '04',
    title: 'Battery Energy Storage Systems',
    subtitle: 'Grid Support & Peak Shaving',
    description:
      'Industrial and utility-scale lithium BESS storage engineered for instantaneous response during ZESCO load shedding, peak tariff shaving, and power quality stabilization.',
    scale: '50kWh – 50MWh+ Storage',
    image: '/resources/green-energy/solar-graphic.webp',
    aspect: 'aspect-[4/5]',
    tag: 'BESS Energy Storage',
    anchor: 'battery-storage-bess',
  },
];

export default function GreenCollections() {
  return (
    <section id="sectors" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto border-t border-[#141c18]/15 dark:border-white/15">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-mono text-[#141c18]/60 dark:text-white/60">
            <span>[ 02 / SECTORS ]</span>
            <span>&bull;</span>
            <span>STRATEGIC ECONOMIC INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-[#141c18] dark:text-white font-editorial-display">
            Core Solution <span className="italic font-editorial-heading text-[#059669] dark:text-[#34d399]">Divisions</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#141c18]/70 dark:text-white/70 leading-relaxed font-light">
          Engineered for Zambia&apos;s demanding industrial conditions. Each division combines Tier-1 global equipment with rigorous local execution to ensure uninterrupted operations.
        </p>
      </div>

      {/* Asymmetric 4-Card Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {sectors.map((item, index) => {
          const colSpan =
            index === 0
              ? 'lg:col-span-7'
              : index === 1
              ? 'lg:col-span-5 lg:mt-16'
              : index === 2
              ? 'lg:col-span-5'
              : 'lg:col-span-7 lg:-mt-12';

          return (
            <article
              key={item.id}
              className={`group relative flex flex-col ${colSpan} transition-all duration-500`}
            >
              {/* Image Frame with Zoom Effect */}
              <div className="relative w-full overflow-hidden bg-[#ded9cd]/30 dark:bg-white/5 border border-[#141c18]/15 dark:border-white/15">
                <div className={`relative w-full ${item.aspect} overflow-hidden`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"
                    className="object-cover object-center grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                    unoptimized
                  />
                  {/* Subtle Gradient Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0e1411]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] bg-[#faf9f5]/90 dark:bg-[#141c18]/90 text-[#141c18] dark:text-white backdrop-blur-sm border border-[#141c18]/10 dark:border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  {/* Corner Index */}
                  <div className="absolute bottom-4 right-4 z-10 text-[11px] font-mono text-white bg-black/60 px-2.5 py-1 backdrop-blur-sm border border-white/15">
                    [{item.id}]
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="pt-6 pb-2 space-y-3">
                <div className="flex items-center justify-between border-b border-[#141c18]/10 dark:border-white/10 pb-3">
                  <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#141c18]/60 dark:text-white/60">
                    {item.subtitle}
                  </div>
                  <div className="text-xs uppercase font-mono tracking-[0.18em] text-[#059669] dark:text-[#34d399] font-medium">
                    {item.scale}
                  </div>
                </div>

                <div className="flex items-baseline justify-between pt-1">
                  <h3 className="text-2xl sm:text-3xl font-light uppercase tracking-tight text-[#141c18] dark:text-white group-hover:text-[#059669] dark:group-hover:text-[#34d399] transition-colors duration-300 font-editorial-display">
                    {item.title}
                  </h3>
                  <a
                    href="#green-solutions-catalog"
                    className="text-xl text-[#141c18] dark:text-white transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 focus:outline-none"
                    aria-label={`Explore ${item.title}`}
                  >
                    &rarr;
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-[#141c18]/70 dark:text-white/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom Editorial Callout */}
      <div className="mt-20 pt-10 border-t border-[#141c18]/15 dark:border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs uppercase tracking-[0.22em] font-mono text-[#141c18]/70 dark:text-white/70">
        <div>
          <span>ZAMBIA &bull; REGIONAL SADC / COMESA EPC CAPABILITY</span>
        </div>
        <a
          href="#green-solutions-catalog"
          className="inline-flex items-center space-x-2 hover:text-[#059669] dark:hover:text-[#34d399] transition-colors group"
        >
          <span>VIEW ALL 20 ENERGY SOLUTIONS</span>
          <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
        </a>
      </div>
    </section>
  );
}

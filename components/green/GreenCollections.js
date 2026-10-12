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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
      {/* Featured + Supporting Divisions Layout */}
      {sectors.map((item, index) => {
        const isFeatured = index === 0;

        return (
          <article
            key={item.id}
            className={`group relative flex flex-col transition-all duration-500 ${
              isFeatured ? 'lg:col-span-12' : 'lg:col-span-4'
            }`}
          >
            {/* Image */}
            <div className="relative w-full overflow-hidden bg-[#ded9cd]/30 dark:bg-white/5 border border-[#141c18]/15 dark:border-white/15">
              <div
                className={`relative w-full overflow-hidden ${
                  isFeatured ? 'aspect-[21/9]' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes={
                    isFeatured
                      ? '100vw'
                      : '(max-width: 1024px) 100vw, 33vw'
                  }
                  className="object-cover object-center grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                  unoptimized
                />

                <div className="absolute inset-0 bg-[#0e1411]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] bg-[#faf9f5]/90 dark:bg-[#141c18]/90 text-[#141c18] dark:text-white border border-[#141c18]/10 dark:border-white/10">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute right-4 top-4 z-10 text-[11px] font-mono text-white bg-black/60 px-2.5 py-1 backdrop-blur-sm border border-white/15">
                  [{item.id}]
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`pt-6 pb-2 ${isFeatured ? 'max-w-4xl' : ''}`}>
              <div className="flex items-center justify-between border-b border-[#141c18]/10 dark:border-white/10 pb-3">
                <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#141c18]/60 dark:text-white/60">
                  {item.subtitle}
                </div>

                <div className="text-xs uppercase font-mono tracking-[0.18em] text-[#059669] dark:text-[#34d399] font-medium">
                  {item.scale}
                </div>
              </div>

              <div className="flex items-baseline justify-between pt-4 gap-6">
                <h3
                  className={`font-light uppercase tracking-tight text-[#141c18] dark:text-white group-hover:text-[#059669] dark:group-hover:text-[#34d399] transition-colors duration-300 font-editorial-display ${
                    isFeatured
                      ? 'text-3xl sm:text-4xl lg:text-5xl'
                      : 'text-2xl sm:text-3xl'
                  }`}
                >
                  {item.title}
                </h3>

                <a
                  href={`#${item.anchor}`}
                  className="text-xl text-[#141c18] dark:text-white transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                  aria-label={`View ${item.title}`}
                >
                  →
                </a>
              </div>

              <p
                className={`mt-3 text-[#141c18]/70 dark:text-white/60 leading-relaxed ${
                  isFeatured ? 'text-base max-w-3xl' : 'text-sm'
                }`}
              >
                {item.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
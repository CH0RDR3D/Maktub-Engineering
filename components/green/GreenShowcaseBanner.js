'use client';

import Image from 'next/image';

export default function GreenShowcaseBanner() {
  return (
    <section id="manifesto" className="relative w-full overflow-hidden my-12 sm:my-20 border-y border-[#141c18]/15 dark:border-white/15 bg-[#0e1411]">
      {/* Edge-to-edge full width visual */}
      <div className="relative w-full min-h-[650px] lg:min-h-[750px] flex items-center justify-center">
        <Image
          src="/resources/green-energy/windmills-field.webp"
          alt="Maktub Green Energy Large Scale Utility Solar & Wind Farm Installation in Zambia"
          fill
          sizes="100vw"
          className="object-cover object-center grayscale-[10%] contrast-[105%] opacity-40 transition-transform duration-1000 ease-out hover:scale-105"
        />

        {/* Cinematic Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1411] via-[#0e1411]/60 to-[#0e1411]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0e1411]/60 to-[#0e1411]" />

        {/* Content Container (Constrained for readability) */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 py-20 text-center text-white space-y-8">
          <div className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.35em] font-mono text-[#34d399]">
            <span>[ 05 / MISSION ]</span>
            <span>&bull;</span>
            <span>THE MAKTUB ENERGY THESIS</span>
          </div>

          <blockquote className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-tight leading-[1.08] font-editorial-display max-w-5xl mx-auto">
            &ldquo;We do not simply install solar panels;{' '}
            <span className="italic font-editorial-heading text-[#34d399] block sm:inline">
              we engineer sovereign energy independence
            </span>{' '}
            for African enterprise and communities.&rdquo;
          </blockquote>

          <div className="pt-4 max-w-xl mx-auto text-xs sm:text-sm text-white/75 font-light leading-relaxed">
            Predictable, low-cost power is the cornerstone of mining viability, agricultural food security, and industrial growth. We bridge the national energy deficit with bankable, engineered infrastructure built for a 25-year lifespan.
          </div>

          {/* Action Row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#solar-calculator-section"
              className="px-8 py-4 bg-white text-[#0e1411] hover:bg-[#34d399] hover:text-[#0e1411] text-xs font-mono uppercase tracking-[0.25em] font-medium transition-colors duration-300"
            >
              Launch Solar ROI Sizing Tool
            </a>
            <a
              href="#green-energy-quote"
              className="px-8 py-4 border border-white/20 text-white hover:border-white text-xs font-mono uppercase tracking-[0.25em] transition-colors duration-300"
            >
              Request On-Site Technical Audit
            </a>
          </div>

          {/* Bottom Coordinates Strip */}
          <div className="pt-12 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 gap-4">
            <span>WOODGATE HOUSE HQ, LUSAKA &bull; LAT. 15.4216&deg; S</span>
            <span>ERB GENERATION COMPLIANT &bull; ZEMA CERTIFIED</span>
            <span>COPPERBELT INDUSTRIAL HUB &bull; LONG. 28.2831&deg; E</span>
          </div>
        </div>
      </div>
    </section>
  );
}

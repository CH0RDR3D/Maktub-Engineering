'use client';

import Image from 'next/image';

export default function GreenAbout() {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto border-t border-[#141c18]/15 dark:border-white/15">
      {/* Top Editorial Index */}
      <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-mono text-[#141c18]/60 dark:text-white/60 mb-12 lg:mb-20">
        <span>[ 03 / CREDENTIALS ]</span>
        <span>&bull;</span>
        <span>ABOUT MAKTUB GREEN DIVISION</span>
      </div>

      {/* Split Editorial Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left Column: Tall Field Engineering Imagery */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-[#141c18]/15 dark:border-white/15 bg-[#ded9cd]/30 dark:bg-white/5 group">
            <Image
              src="/resources/green-energy/man-working-environment-project.webp"
              alt="Maktub Green Energy Engineers inspecting Solar PV and BESS arrays"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
            />
            {/* Ambient Shadow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1411]/60 via-transparent to-transparent opacity-70" />

            {/* Corner Metadata Card */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#faf9f5]/95 dark:bg-[#141c18]/95 backdrop-blur-md border border-[#141c18]/10 dark:border-white/10 text-xs">
              <div className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#059669] dark:text-[#34d399] mb-1">
                EIZ &amp; NCC GRADE 5 ACCREDITED CONTRACTOR
              </div>
              <p className="font-light text-[#141c18] dark:text-white leading-tight font-editorial-display uppercase">
                Zambian-Owned &bull; Energy Regulation Board (ERB) &amp; ZESCO Interconnection Ready
              </p>
            </div>
          </div>

          {/* Decorative Floating Frame Offset */}
          <div
            className="hidden sm:block absolute -bottom-6 -right-6 w-36 h-36 border border-[#10b981]/30 -z-10"
            aria-hidden="true"
          />
        </div>

        {/* Right Column: Narrative & Credentials Content */}
        <div className="lg:col-span-7 space-y-10 lg:pl-6">
          <div className="space-y-4">
            <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#059669] dark:text-[#34d399] font-medium block">
              BANKABLE ENGINEERING &bull; POWER INDEPENDENCE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-[#141c18] dark:text-white leading-[1.02] font-editorial-display">
              We engineer African energy resilience through{' '}
              <span className="italic font-editorial-heading text-[#059669] dark:text-[#34d399]">
                radical technical rigor.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-sm sm:text-base text-[#141c18]/80 dark:text-white/80 leading-relaxed font-light">
            <p>
              Maktub Engineering &amp; General Supply Limited operates at the forefront of Zambia&apos;s clean energy transformation. By combining world-class Tier-1 renewable hardware with multi-disciplinary local engineering, we deliver infrastructure that insulates African enterprise from grid instability and soaring operational tariffs.
            </p>
            <p>
              From initial solar irradiance mapping and bankable feasibility modeling to complete EPC commissioning and 25-year preventative O&amp;M, our in-house engineers ensure every megawatt complies strictly with the Energy Regulation Board (ERB) standards, ZEMA environmental protocols, and the Zambian Grid Code.
            </p>
          </div>

          {/* Editorial Metric Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[#141c18]/15 dark:border-white/15">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-light text-[#141c18] dark:text-white font-editorial-display">
                20
              </div>
              <div className="text-[11px] uppercase font-mono tracking-[0.2em] text-[#141c18]/60 dark:text-white/60">
                TURNKEY SOLUTIONS
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-light text-[#141c18] dark:text-white font-editorial-display">
                8 STAGES
              </div>
              <div className="text-[11px] uppercase font-mono tracking-[0.2em] text-[#141c18]/60 dark:text-white/60">
                DELIVERY LIFECYCLE
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 space-y-1">
              <div className="text-3xl sm:text-4xl font-light text-[#141c18] dark:text-white font-editorial-display">
                100%
              </div>
              <div className="text-[11px] uppercase font-mono tracking-[0.2em] text-[#141c18]/60 dark:text-white/60">
                GRID CODE COMPLIANT
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="#project-delivery-model"
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-medium text-[#141c18] dark:text-white pb-1 border-b border-[#141c18] dark:border-white hover:text-[#059669] dark:hover:text-[#34d399] hover:border-[#059669] dark:hover:border-[#34d399] transition-all group"
            >
              <span>Explore The 8-Stage Delivery Model</span>
              <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                &rarr;
              </span>
            </a>

            <a
              href="#green-energy-quote"
              className="text-xs uppercase tracking-[0.25em] font-mono text-[#059669] dark:text-[#34d399] hover:underline"
            >
              Request On-Site Audit &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

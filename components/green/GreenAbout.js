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

const CREDENTIALS = [
  { label: 'EIZ Registered Engineering Organisation', icon: 'ti-certificate' },
  { label: 'NCC Grade 5 — Category C Contractor', icon: 'ti-building' },
  { label: 'Energy Regulation Board (ERB) Licensed', icon: 'ti-shield-check' },
  { label: 'ZESCO Grid Interconnection Ready', icon: 'ti-bolt' },
  { label: 'ZEMA Environmental Compliance', icon: 'ti-leaf' },
  { label: '100% Zambian-Owned Enterprise', icon: 'ti-flag' },
];

const METRICS = [
  { value: '20', label: 'Turnkey Solutions' },
  { value: '8 Stages', label: 'Delivery Lifecycle' },
  { value: '100%', label: 'Grid Code Compliant' },
];

export default function GreenAbout() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 max-w-[1400px] mx-auto border-t border-[#141c18]/15 dark:border-white/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left: Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-[#141c18]/10 dark:border-white/10 group">
            <Image
              src="/resources/green-energy/man-working-environment-project.webp"
              alt="Maktub Green Energy engineer inspecting solar PV installation"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d]/70 via-transparent to-transparent" />

            {/* Credential overlay card */}
            <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 dark:bg-[#0d1410]/95 backdrop-blur-md border border-[#141c18]/10 dark:border-white/10">
              <div className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#059669] dark:text-emerald-400 mb-1.5">
                EIZ · NCC Grade 5 · ERB Licensed
              </div>
              <p className="text-xs font-light text-[#141c18] dark:text-white leading-snug uppercase font-editorial-display">
                Zambian-Owned · ZESCO Interconnection Ready · ZEMA Certified
              </p>
            </div>
          </div>

          {/* Decorative offset border */}
          <div
            className="hidden sm:block absolute -bottom-5 -right-5 w-32 h-32 border border-emerald-500/20 -z-10"
            aria-hidden="true"
          />
        </motion.div>

        {/* Right: Content */}
        <div className="lg:col-span-7 lg:pl-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#059669] dark:text-emerald-400 font-medium block">
                [ 03 / CREDENTIALS ] · BANKABLE ENGINEERING
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-[#141c18] dark:text-white leading-[1.02] font-editorial-display">
                Engineering African{' '}
                <span className="italic font-editorial-heading text-[#059669] dark:text-emerald-400">
                  energy resilience.
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#141c18]/85 dark:text-white/80 leading-relaxed font-light">
              <p>
                Maktub Engineering operates at the forefront of Zambia&apos;s clean energy transformation. World-class Tier-1 hardware combined with multi-disciplinary local engineering — delivering infrastructure that insulates African enterprise from grid instability and soaring tariffs.
              </p>
              <p>
                From initial solar irradiance mapping and bankable feasibility modeling through to complete EPC commissioning and 25-year preventative O&M.
              </p>
            </div>

            {/* Credential badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {CREDENTIALS.map((c, i) => (
                <motion.div
                  key={c.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i * 0.08}
                  className="flex items-center gap-3 px-3.5 py-2.5 border border-[#141c18]/15 dark:border-white/10 bg-white dark:bg-white/5 text-xs text-[#141c18]/85 dark:text-white/80 hover:border-[#059669]/40 dark:hover:border-emerald-500/40 transition-colors shadow-sm"
                >
                  <i className={`ti ${c.icon} text-[#059669] dark:text-emerald-400 text-sm shrink-0`} aria-hidden="true" />
                  <span className="font-mono uppercase tracking-[0.12em] text-[10px] font-medium">{c.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#141c18]/15 dark:border-white/10">
              {METRICS.map((m, i) => (
                <motion.div
                  key={m.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i * 0.1}
                  className="space-y-1"
                >
                  <div className="text-3xl sm:text-4xl font-light text-[#141c18] dark:text-white font-editorial-display">
                    {m.value}
                  </div>
                  <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#141c18]/70 dark:text-white/65 font-medium">
                    {m.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
              <a
                href="#project-delivery-model"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-medium text-[#141c18] dark:text-white pb-1 border-b border-[#141c18] dark:border-white hover:text-[#059669] dark:hover:text-emerald-400 hover:border-[#059669] dark:hover:border-emerald-400 transition-all group"
              >
                <span>Explore 8-Stage Delivery</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </a>
              <a
                href="#green-energy-quote"
                className="text-xs uppercase tracking-[0.25em] font-mono text-[#059669] dark:text-emerald-400 hover:underline"
              >
                Request On-Site Audit →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

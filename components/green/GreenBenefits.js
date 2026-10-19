'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const benefits = [
  {
    number: '01',
    title: 'Tier-1 Bankable Engineering',
    subtitle: 'BloombergNEF Certified Assets',
    description:
      'Exclusively BloombergNEF Tier-1 solar modules, European inverters, and CATL/BYD lithium storage cells engineered to survive high ambient temperatures and grid surges.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    detail: 'We specify only components that international development finance institutions (DFIs) will accept as bankable. Every module and inverter carries the IEC certifications required for grid interconnection.',
  },
  {
    number: '02',
    title: 'ZESCO & Regulatory Assurance',
    subtitle: 'ERB & Grid Code Permitting',
    description:
      'Full statutory pathway management: ERB generation licenses, ZESCO net-metering interconnection agreements, and ZEMA environmental compliance.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3" />
      </svg>
    ),
    detail: 'Our regulatory engineers manage the complete licensing lifecycle from initial ERB application through ZESCO inspection and commissioning sign-off, ensuring zero compliance gaps.',
  },
  {
    number: '03',
    title: '8-Stage Turnkey EPC Delivery',
    subtitle: 'End-to-End Accountability',
    description:
      'From satellite irradiance audits, load profile logging, and financial structuring through to civil works, commissioning, and a 25-year preventative O&M protocol.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M12 3v18m0-18c-3.5 0-6 2.5-6 6 0 5 6 12 6 12s6-7 6-12c0-3.5-2.5-6-6-6z" />
      </svg>
    ),
    detail: 'Single-point accountability from day one through to the 25th year of operations. Our project management framework mirrors international IFC Performance Standards.',
  },
  {
    number: '04',
    title: 'Zambian Sovereign Capability',
    subtitle: 'Local Field Response Teams',
    description:
      'Proudly 100% Zambian owned. Field engineers and certified technicians stationed in Lusaka and the Copperbelt deliver rapid on-site troubleshooting and guaranteed uptime.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    detail: 'Local field presence means we reach any Copperbelt or Lusaka site within 4 hours of a fault alert. No waiting for import parts — we maintain a stocked spare-parts warehouse.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
};

export default function GreenBenefits() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section
      id="benefits"
      className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 max-w-[1400px] mx-auto border-t border-[#141c18]/15 dark:border-white/10"
    >
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
      >
        <div className="space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#141c18]/50 dark:text-white/40">
            [ 06 / STANDARDS ] · THE MAKTUB ASSURANCE
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-[#141c18] dark:text-white font-editorial-display">
            The Maktub Energy{' '}
            <span className="italic font-editorial-heading text-[#059669] dark:text-emerald-400">
              Standard
            </span>
          </h2>
        </div>
        <p className="max-w-sm text-sm text-[#141c18]/60 dark:text-white/50 leading-relaxed font-light">
          Every component meets IEC certifications and Zambian regulatory standards — engineered for a 25-year horizon.
        </p>
      </motion.div>

      {/* Accordion benefit cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((benefit, i) => {
          const isOpen = openIdx === i;
          return (
            <motion.div
              key={benefit.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              custom={i * 0.1}
              className={`border transition-all duration-300 ${
                isOpen
                  ? 'border-[#059669]/50 dark:border-emerald-500/40 bg-[#f4fdf8] dark:bg-emerald-500/10 shadow-md'
                  : 'border-[#141c18]/15 dark:border-white/10 bg-white dark:bg-[#0d1410] hover:border-[#141c18]/30 dark:hover:border-white/20 shadow-sm'
              }`}
            >
              {/* Card header — always visible */}
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full flex items-center justify-between p-6 lg:p-7 text-left group bg-transparent border-none cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`flex-shrink-0 w-10 h-10 flex items-center justify-center border transition-colors duration-300 ${
                      isOpen
                        ? 'border-[#059669]/40 text-[#059669] dark:text-emerald-400 bg-emerald-500/10'
                        : 'border-[#141c18]/20 dark:border-white/20 text-[#059669] dark:text-emerald-400 group-hover:border-[#059669]/40'
                    }`}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#141c18]/70 dark:text-white/60 mb-0.5 font-medium">
                      [{benefit.number}] {benefit.subtitle}
                    </div>
                    <h3 className="text-lg font-light uppercase tracking-tight text-[#141c18] dark:text-white font-editorial-display group-hover:text-[#059669] dark:group-hover:text-emerald-400 transition-colors">
                      {benefit.title}
                    </h3>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="ml-4 flex-shrink-0 text-[#141c18]/70 dark:text-white/70 text-lg font-bold"
                >
                  +
                </motion.div>
              </button>

              {/* Always-visible description */}
              <div className="px-6 lg:px-7 pb-4">
                <p className="text-sm sm:text-base text-[#141c18]/80 dark:text-white/75 leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>

              {/* Expandable detail */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="detail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 lg:px-7 pb-6 pt-2 border-t border-[#059669]/15 dark:border-emerald-500/15">
                      <p className="text-sm text-[#059669] dark:text-emerald-400/90 leading-relaxed font-light">
                        {benefit.detail}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 text-center"
      >
        <a
          href="#green-energy-quote"
          className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#059669] dark:text-emerald-400 border-b border-[#059669]/40 dark:border-emerald-500/40 pb-0.5 hover:border-[#059669] dark:hover:border-emerald-400 transition-all group"
        >
          <span>Start your energy assessment</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </motion.div>
    </section>
  );
}

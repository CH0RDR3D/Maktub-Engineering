'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function GreenShowcaseBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative w-full overflow-hidden border-y border-[#141c18]/15 dark:border-white/10 bg-[#0a0f0d]"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imgY }}>
        <Image
          src="/resources/green-energy/windmills-field.webp"
          alt="Large-scale wind and solar farm — Maktub Green Energy"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-35 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-[#0a0f0d]/65 to-[#0a0f0d]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(16,185,129,0.07),transparent)]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10 py-24 sm:py-32 text-center text-white space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] font-mono text-emerald-400"
        >
          <span>[ 05 / MISSION ]</span>
          <span>·</span>
          <span>The Maktub Energy Thesis</span>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-tight leading-[1.06] font-editorial-display max-w-5xl mx-auto"
        >
          &ldquo;We do not simply install solar panels;{' '}
          <span className="italic font-editorial-heading text-emerald-400">
            we engineer sovereign energy independence
          </span>{' '}
          for African enterprise.&rdquo;
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-sm sm:text-base text-white/85 font-light leading-relaxed"
        >
          Predictable, low-cost power is the cornerstone of mining viability, agricultural food security, and industrial growth. We bridge the national energy deficit with bankable, engineered infrastructure built for a 25-year lifespan.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <motion.a
            href="#solar-calculator-section"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-emerald-400 text-[#0a0f0d] hover:bg-emerald-300 text-xs font-mono uppercase tracking-[0.25em] font-bold transition-colors duration-300 shadow-md"
          >
            Launch Solar ROI Tool
          </motion.a>
          <motion.a
            href="#green-energy-quote"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 border border-white/30 text-white hover:border-emerald-400 hover:bg-emerald-500/15 hover:text-emerald-300 text-xs font-mono uppercase tracking-[0.25em] font-semibold transition-all duration-300"
          >
            Request Technical Audit
          </motion.a>
        </motion.div>

        {/* Coordinates strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-10 flex flex-col sm:flex-row items-center justify-between border-t border-white/20 text-[11px] font-mono uppercase tracking-[0.22em] text-white/70 gap-3"
        >
          <span>Woodgate House HQ, Lusaka · Lat. 15.4216° S</span>
          <span>ERB Generation Compliant · ZEMA Certified</span>
          <span>Copperbelt Industrial Hub · Long. 28.2831° E</span>
        </motion.div>
      </div>
    </section>
  );
}

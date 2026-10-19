'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function GreenNewsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section
      id="energy-dispatches"
      className="py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-14 max-w-[1400px] mx-auto border-t border-[#141c18]/15 dark:border-white/10"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#111915] dark:bg-[#0a0f0d] text-white overflow-hidden rounded-2xl sm:rounded-3xl border border-[#141c18]/20 dark:border-white/15 shadow-2xl"
      >
        {/* Subtle background grid */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
          aria-hidden="true"
        />
        {/* Ambient green glow */}
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-2xl mx-auto text-center px-8 py-20 sm:py-24 space-y-7">
          <span className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.3em] font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 border border-emerald-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            [ 07 / CORRESPONDENCE ] · Regional Energy Intelligence
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-white leading-[1.05] font-editorial-display">
            The Zambian Clean Energy{' '}
            <span className="italic font-editorial-heading text-emerald-400">Dispatch</span>
          </h2>

          <p className="text-sm sm:text-base text-white/85 max-w-lg mx-auto leading-relaxed font-light">
            Quarterly technical briefs on Zambian energy tariffs, ZESCO net-metering updates, BESS storage economics, and Southern African solar developments.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="p-7 border border-emerald-500/40 bg-emerald-500/15 text-center space-y-2 rounded-lg"
            >
              <div className="text-sm font-mono uppercase tracking-[0.25em] text-emerald-300 font-semibold">
                ✓ Subscription Confirmed
              </div>
              <p className="text-xs sm:text-sm text-white/80 font-light">
                Our latest Zambian Industrial Energy Benchmark Report will arrive in your inbox shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-2 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter corporate email..."
                  aria-label="Email address for energy intelligence dispatches"
                  className="w-full px-5 py-3.5 bg-white/10 border border-white/25 text-white text-xs font-mono tracking-[0.12em] placeholder:text-white/60 focus:outline-none focus:border-emerald-400 focus:bg-white/15 focus:ring-1 focus:ring-emerald-400 transition-colors"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-[#090d16] text-xs font-mono uppercase tracking-[0.22em] font-bold transition-colors shrink-0 shadow-md"
                >
                  Subscribe
                </motion.button>
              </div>

              {error && (
                <p className="text-[11px] font-mono text-red-400 text-left tracking-wide">
                  {error}
                </p>
              )}

              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-white/70">
                <span>Quarterly releases</span>
                <span>Instant unsubscribe</span>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}

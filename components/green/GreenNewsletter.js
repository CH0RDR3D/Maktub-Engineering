'use client';

import { useState } from 'react';

export default function GreenNewsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid corporate or engineering email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="energy-dispatches" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto border-t border-[#141c18]/15 dark:border-white/15">
      <div className="bg-[#141c18] dark:bg-[#0c120f] text-white p-10 sm:p-16 lg:p-24 relative overflow-hidden border border-[#141c18]/20 dark:border-white/10">
        {/* Subtle Decorative Background Grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.3em] font-mono text-[#34d399]">
            <span>[ 07 / CORRESPONDENCE ]</span>
            <span>&bull;</span>
            <span>REGIONAL ENERGY INTELLIGENCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-white leading-[1.05] font-editorial-display">
            The Zambian Clean Energy <span className="italic font-editorial-heading text-[#34d399]">Dispatch</span>
          </h2>

          <p className="text-xs sm:text-sm text-white/75 max-w-xl mx-auto leading-relaxed font-light">
            Receive Maktub Engineering&apos;s quarterly technical brief on Zambian energy tariffs, ZESCO net-metering regulatory updates, BESS storage economics, and Southern African commercial solar developments.
          </p>

          {/* Form */}
          {submitted ? (
            <div className="p-8 border border-[#34d399]/40 bg-[#34d399]/10 text-center space-y-2 animate-fade-up">
              <div className="text-sm font-mono uppercase tracking-[0.25em] text-[#34d399]">
                &check; Technical Subscription Confirmed
              </div>
              <p className="text-xs text-white/80 font-light">
                Thank you for subscribing. Our latest Zambian Industrial Energy Benchmark Report will arrive in your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 pt-4 max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="ENTER CORPORATE EMAIL..."
                  aria-label="Email address for energy intelligence dispatches"
                  className="w-full px-5 py-4 bg-transparent border border-white/25 text-white text-xs font-mono uppercase tracking-[0.2em] placeholder:text-white/40 focus:outline-none focus:border-[#34d399] transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white hover:bg-[#34d399] text-[#141c18] text-xs font-mono uppercase tracking-[0.25em] font-medium transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </div>

              {error && (
                <p className="text-[11px] font-mono text-red-400 text-left pt-1 tracking-wide">
                  {error}
                </p>
              )}

              <div className="pt-2 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
                <span>QUARTERLY TECHNICAL RELEASES</span>
                <span>INSTANT UNSUBSCRIBE</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

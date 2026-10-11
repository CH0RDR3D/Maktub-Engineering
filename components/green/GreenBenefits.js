'use client';

const benefits = [
  {
    number: '01',
    title: 'Tier-1 Bankable Engineering',
    subtitle: 'BloombergNEF Certified Assets',
    description:
      'We specify exclusively BloombergNEF Tier-1 solar modules, European inverters, and Tier-1 CATL/BYD lithium storage cells engineered to survive high ambient temperatures and electrical grid surges.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
          d="M12 3v18m0-18c-3.5 0-6 2.5-6 6 0 5 6 12 6 12s6-7 6-12c0-3.5-2.5-6-6-6z"
        />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'ZESCO & Regulatory Assurance',
    subtitle: 'ERB & Grid Code Permitting',
    description:
      'Our regulatory engineers manage the complete statutory pathway: Energy Regulation Board (ERB) generation licenses, ZESCO net-metering interconnection agreements, and ZEMA environmental compliance.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    number: '03',
    title: '8-Stage Turnkey EPC Delivery',
    subtitle: 'End-to-End Accountability',
    description:
      'From initial satellite irradiance audits, load profile logging, and financial structuring through to civil works, commissioning, and a 25-year preventative Operations & Maintenance protocol.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"
        />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Zambian Sovereign Capability',
    subtitle: 'Local Field Response Teams',
    description:
      'Proudly 100% Zambian owned and staffed. Our field engineers and certified technicians are stationed in Lusaka and the Copperbelt, delivering rapid on-site troubleshooting and guaranteed power uptime.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
];

export default function GreenBenefits() {
  return (
    <section id="benefits" className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 max-w-[1400px] mx-auto border-t border-[#141c18]/15 dark:border-white/15">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-mono text-[#141c18]/60 dark:text-white/60">
            <span>[ 06 / STANDARDS ]</span>
            <span>&bull;</span>
            <span>THE MAKTUB ASSURANCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-[#141c18] dark:text-white font-editorial-display">
            The Maktub Energy <span className="italic font-editorial-heading text-[#059669] dark:text-[#34d399]">Standard</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#141c18]/70 dark:text-white/70 leading-relaxed font-light">
          We engineer assets for a 25-year operating horizon. Every component meets international IEC certifications and local Zambian regulatory standards.
        </p>
      </div>

      {/* 4 Clean Minimalist Benefit Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit) => (
          <div
            key={benefit.number}
            className="group relative flex flex-col justify-between p-8 border border-[#141c18]/15 dark:border-white/15 bg-[#faf9f5] dark:bg-[#141c18]/60 hover:bg-[#ded9cd]/30 dark:hover:bg-white/5 transition-colors duration-300"
          >
            {/* Top Row: Number & Icon */}
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-[#141c18]/10 dark:border-white/10 pb-6">
                <span className="text-sm font-mono tracking-[0.2em] text-[#141c18]/50 dark:text-white/50">
                  [{benefit.number}]
                </span>
                <div className="text-[#059669] dark:text-[#34d399] group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <div className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#141c18]/50 dark:text-white/50">
                  {benefit.subtitle}
                </div>
                <h3 className="text-xl sm:text-2xl font-light uppercase tracking-tight text-[#141c18] dark:text-white font-editorial-display group-hover:text-[#059669] dark:group-hover:text-[#34d399] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#141c18]/70 dark:text-white/70 leading-relaxed font-light pt-2">
                  {benefit.description}
                </p>
              </div>
            </div>

            {/* Bottom Corner Accent */}
            <div className="mt-8 pt-4 border-t border-[#141c18]/10 dark:border-white/10 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#141c18]/50 dark:text-white/50">
              <span>TECHNICAL COMPLIANCE</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

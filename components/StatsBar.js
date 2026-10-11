export default function StatsBar({
  items = [
    { target: 5, suffix: '+', label: 'Years in Business', icon: 'ti ti-calendar' },
    { target: 3, suffix: '', label: 'Service Divisions', icon: 'ti ti-tool' },
    { target: 8, suffix: '+', label: 'Accreditations & Licenses', icon: 'ti ti-certificate' },
    { target: 2, suffix: '', label: 'Provincial Branches', icon: 'ti ti-map-pin' }
  ],
  id = 'stats-overview',
  className = ''
}) {
  return (
    <section id={id} className={`py-12 sm:py-16 border-y border-[#141c18]/15 dark:border-white/15 bg-[#faf9f5] dark:bg-[#0a0f0d] ${className}`} aria-label="Key Performance Indicators">
      <div className="section-inner max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-[#141c18]/10 dark:divide-white/10">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between pt-6 sm:pt-0 sm:px-6 first:pl-0 last:pr-0 reveal`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-[#141c18]/50 dark:text-white/50 mb-3">
                <span>[ 0{index + 1} ]</span>
                <i className={`${item.icon} text-[#059669] dark:text-[#34d399]`} aria-hidden="true" />
              </div>

              <div
                className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#141c18] dark:text-white font-editorial-display leading-tight my-1"
                data-target={item.target}
                data-suffix={item.suffix || ''}
                data-prefix={item.prefix || ''}
              >
                {item.target}{item.suffix}
              </div>

              <div className="text-xs font-mono uppercase tracking-[0.18em] text-[#141c18]/70 dark:text-white/70 mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

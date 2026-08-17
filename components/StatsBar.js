export default function StatsBar({
  items = [
    { target: 5, suffix: '+', label: 'Years of Excellence', icon: 'ti ti-calendar-event' },
    { target: 3, suffix: '', label: 'Service Divisions', icon: 'ti ti-category' },
    { target: 8, suffix: '+', label: 'Accreditations & Licenses', icon: 'ti ti-certificate' },
    { target: 2, suffix: '', label: 'Provincial Branches', icon: 'ti ti-building-community' }
  ],
  id = 'stats-overview',
  className = ''
}) {
  return (
    <div id={id} className={`stats-bar-wrapper ${className}`}>
      <div className="section-inner">
        <div className="stats-bar-grid">
          {items.map((item, index) => (
            <div key={index} className="stat-card reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="stat-icon-wrapper">
                <i className={item.icon} aria-hidden="true" />
              </div>
              <div className="stat-card-content">
                <div
                  className="stat-number"
                  data-target={item.target}
                  data-suffix={item.suffix || ''}
                  data-prefix={item.prefix || ''}
                >
                  0{item.suffix}
                </div>
                <div className="stat-label-text">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

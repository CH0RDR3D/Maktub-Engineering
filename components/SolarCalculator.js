'use client';

import { useState, useMemo } from 'react';

const SECTOR_PRESETS = [
  { id: 'commercial', name: 'Commercial & Retail', baseKw: 40, billRange: 45000, desc: 'Offices, Warehouses, Malls' },
  { id: 'industrial', name: 'Industrial & Factory', baseKw: 150, billRange: 180000, desc: 'Manufacturing & Processing' },
  { id: 'mining', name: 'Mining & Heavy Site', baseKw: 500, billRange: 650000, desc: 'Pumping, Camps & Heavy Plant' },
  { id: 'agriculture', name: 'Farm & Agribusiness', baseKw: 75, billRange: 90000, desc: 'Irrigation, Cold Storage, Milling' },
  { id: 'public', name: 'Hospital / School', baseKw: 50, billRange: 60000, desc: 'Clinics, Colleges, Public Facilities' },
  { id: 'offgrid', name: 'Off-Grid / Community', baseKw: 30, billRange: 35000, desc: 'Mini-Grids & Rural Electrification' }
];

export default function SolarCalculator({ onApplyEstimate }) {
  const [sector, setSector] = useState('commercial');
  const [monthlySpend, setMonthlySpend] = useState(45000);
  const [backupType, setBackupType] = useState('grid-generator');
  const [roofArea, setRoofArea] = useState(400);

  // Dynamic calculations based on Zambian irradiance (avg 5.2 peak sun hours/day)
  const calculation = useMemo(() => {
    // Zambian commercial grid tariff approx ~ 1.5 - 2.0 ZMW / kWh blended
    const effectiveTariff = 1.85; 
    const estimatedMonthlyKwh = Math.round(monthlySpend / effectiveTariff);
    
    // Daily kWh needed
    const dailyKwh = estimatedMonthlyKwh / 30;
    
    // Solar sizing: daily kWh / 4.8 effective peak sun hours
    let solarKw = Math.max(5, Math.round(dailyKwh / 4.8));
    
    // Storage sizing: 50% to 100% of daily load depending on backup type
    let storageMultiplier = backupType === 'offgrid' ? 1.4 : backupType === 'grid-generator' ? 0.6 : 0.4;
    let storageKwh = Math.round(dailyKwh * storageMultiplier);
    
    // Annual solar generation (kWh/yr) = kW * 5.2 PSH * 365 * 0.85 PR
    const annualKwh = Math.round(solarKw * 5.2 * 365 * 0.85);
    
    // Annual savings in ZMW (grid displacement + generator diesel displacement)
    const dieselFuelSavingsBonus = backupType === 'grid-generator' ? 1.25 : backupType === 'offgrid' ? 1.5 : 1.1;
    const annualSavingsZmw = Math.round(annualKwh * effectiveTariff * dieselFuelSavingsBonus);
    
    // CO2 offset: 0.75 kg CO2 per kWh in Zambian mixed grid/diesel offset
    const annualCo2Tonnes = Math.round((annualKwh * 0.72) / 1000);
    
    // Diesel fuel displacement percent
    const dieselDisplacement = backupType === 'offgrid' ? 85 : backupType === 'grid-generator' ? 75 : 60;
    
    // Estimated roof area required (~ 6.5 m² per kW)
    const requiredAreaM2 = Math.round(solarKw * 6.5);

    return {
      solarKw,
      storageKwh,
      annualKwh,
      annualSavingsZmw,
      annualCo2Tonnes,
      dieselDisplacement,
      requiredAreaM2,
      estimatedMonthlyKwh
    };
  }, [monthlySpend, backupType]);

  const handlePresetSelect = (preset) => {
    setSector(preset.id);
    setMonthlySpend(preset.billRange);
  };

  return (
    <div className="solar-calc-card">
      <div className="solar-calc-header">
        <div className="solar-calc-badge">
          <i className="ti ti-calculator" aria-hidden="true" /> Interactive Sizing &amp; ROI Tool
        </div>
        <h3 className="solar-calc-title">Estimate Your Solar Capacity &amp; Annual Savings</h3>
        <p className="solar-calc-sub">
          Adjust the sliders below to calculate recommended system size, storage capacity, and financial return based on Zambian irradiance.
        </p>
      </div>

      {/* Preset Sector Selectors */}
      <div className="calc-presets-row">
        <span className="calc-preset-label">Facility Type:</span>
        <div className="calc-presets-pills">
          {SECTOR_PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`calc-preset-btn ${sector === p.id ? 'active' : ''}`}
              onClick={() => handlePresetSelect(p)}
            >
              <span>{p.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="solar-calc-grid">
        {/* Left: Input Controls */}
        <div className="calc-controls-pane">
          <div className="calc-slider-group">
            <div className="calc-slider-header">
              <label htmlFor="spend-slider" className="calc-control-label">
                <i className="ti ti-currency-dollar" /> Monthly Electricity / Diesel Spend:
              </label>
              <div className="calc-slider-val">
                {monthlySpend.toLocaleString()} <span>ZMW / month</span>
              </div>
            </div>
            <input
              id="spend-slider"
              type="range"
              min={5000}
              max={500000}
              step={5000}
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(Number(e.target.value))}
              className="calc-range-slider"
            />
            <div className="calc-range-ticks">
              <span>5k ZMW</span>
              <span>100k ZMW</span>
              <span>250k ZMW</span>
              <span>500k+ ZMW</span>
            </div>
          </div>

          <div className="calc-control-group">
            <label className="calc-control-label">
              <i className="ti ti-plug-connected" /> Current Power Reliability Situation:
            </label>
            <div className="calc-radio-pills">
              <button
                type="button"
                className={`calc-pill-opt ${backupType === 'grid-generator' ? 'active' : ''}`}
                onClick={() => setBackupType('grid-generator')}
              >
                <i className="ti ti-bolt" /> Grid + Diesel Genset
              </button>
              <button
                type="button"
                className={`calc-pill-opt ${backupType === 'grid-only' ? 'active' : ''}`}
                onClick={() => setBackupType('grid-only')}
              >
                <i className="ti ti-building" /> Grid with Outages
              </button>
              <button
                type="button"
                className={`calc-pill-opt ${backupType === 'offgrid' ? 'active' : ''}`}
                onClick={() => setBackupType('offgrid')}
              >
                <i className="ti ti-antenna" /> 100% Off-Grid Remote
              </button>
            </div>
          </div>

          <div className="calc-info-note">
            <i className="ti ti-info-circle" />
            <span>
              Calculated using average <strong>5.2 peak sun hours/day</strong> in Zambia with Tier-1 bifacial monocrystalline solar modules and lithium iron phosphate (LFP) storage.
            </span>
          </div>
        </div>

        {/* Right: Real-time Output Dashboards */}
        <div className="calc-results-pane">
          <div className="calc-results-title">
            <i className="ti ti-chart-pie" /> Estimated System Configuration &amp; Impact
          </div>

          <div className="calc-metrics-grid">
            <div className="calc-metric-box highlight-green">
              <div className="metric-icon"><i className="ti ti-solar-panel" /></div>
              <div className="metric-data">
                <div className="metric-number">{calculation.solarKw} <span>kWp</span></div>
                <div className="metric-desc">Recommended Solar PV</div>
              </div>
            </div>

            <div className="calc-metric-box highlight-gold">
              <div className="metric-icon"><i className="ti ti-battery-charging" /></div>
              <div className="metric-data">
                <div className="metric-number">{calculation.storageKwh} <span>kWh</span></div>
                <div className="metric-desc">Lithium BESS Storage</div>
              </div>
            </div>

            <div className="calc-metric-box">
              <div className="metric-icon"><i className="ti ti-coins" /></div>
              <div className="metric-data">
                <div className="metric-number">{calculation.annualSavingsZmw.toLocaleString()} <span>ZMW</span></div>
                <div className="metric-desc">Est. Annual Cost Savings</div>
              </div>
            </div>

            <div className="calc-metric-box">
              <div className="metric-icon"><i className="ti ti-leaf" /></div>
              <div className="metric-data">
                <div className="metric-number">{calculation.annualCo2Tonnes} <span>t</span></div>
                <div className="metric-desc">CO₂ Offset / Year</div>
              </div>
            </div>
          </div>

          <div className="calc-extra-specs">
            <div className="calc-extra-item">
              <i className="ti ti-gas-station" />
              <span>Diesel Genset Displacement: <strong>~{calculation.dieselDisplacement}%</strong></span>
            </div>
            <div className="calc-extra-item">
              <i className="ti ti-arrows-maximize" />
              <span>Est. Roof / Land Footprint: <strong>~{calculation.requiredAreaM2} m²</strong></span>
            </div>
          </div>

          <div className="calc-action-row">
            <a
              href="#energy-assessment-form"
              className="btn-green-primary btn-calc-quote"
              onClick={() => {
                if (onApplyEstimate) {
                  onApplyEstimate({
                    sector,
                    loadEstimate: `${calculation.solarKw} kWp Solar + ${calculation.storageKwh} kWh BESS (Spend: ${monthlySpend.toLocaleString()} ZMW/mo)`
                  });
                }
              }}
            >
              <i className="ti ti-clipboard-check" />
              <span>Apply This Estimate to Quote Form</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

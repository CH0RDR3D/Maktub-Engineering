'use client';

import { useState, useEffect } from 'react';
import { GREEN_ENERGY_SOLUTIONS, GREEN_ENERGY_SECTORS } from '../lib/greenEnergyData';

export default function GreenEnergyAssessmentForm({
  defaultSolution = '',
  defaultSector = '',
  defaultLoadEstimate = ''
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    sector: defaultSector || 'commercial-industrial',
    solution: defaultSolution || 'commercial-industrial-solar',
    loadEstimate: defaultLoadEstimate || '',
    timeline: '1-3-months',
    message: ''
  });

  useEffect(() => {
    if (defaultLoadEstimate) {
      setFormData((prev) => ({ ...prev, loadEstimate: defaultLoadEstimate }));
    }
    if (defaultSector) {
      setFormData((prev) => ({ ...prev, sector: defaultSector }));
    }
    if (defaultSolution) {
      setFormData((prev) => ({ ...prev, solution: defaultSolution }));
    }
  }, [defaultLoadEstimate, defaultSector, defaultSolution]);

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus({
        type: 'error',
        message: 'Please provide your name, email, and phone number so our engineering team can contact you.'
      });
      return;
    }

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // 1. Submit to Formspree endpoint
      const response = await fetch('https://formspree.io/f/mnjynozp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          subject: `Green Energy Assessment Request: ${formData.solution}`
        })
      });

      if (!response.ok) {
        throw new Error('Server returned error');
      }

      // 2. Open WhatsApp for instant expedited review
      const whatsappNumber = '260978294747';
      const selectedSolutionObj = GREEN_ENERGY_SOLUTIONS.find((s) => s.id === formData.solution);
      const solutionName = selectedSolutionObj ? selectedSolutionObj.title : formData.solution;
      
      const waText = `*New Green Energy Assessment Request - Maktub Engineering*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Organization:* ${formData.organization || 'N/A'}\n` +
        `*Email:* ${formData.email}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Sector:* ${formData.sector}\n` +
        `*Solution:* ${solutionName}\n` +
        `*Estimated Load / Capacity:* ${formData.loadEstimate || 'Unspecified'}\n` +
        `*Project Timeline:* ${formData.timeline}\n\n` +
        `*Requirements:* ${formData.message || 'Standard assessment and quotation requested.'}`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waText)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      // 3. Status success & reset
      setStatus({
        type: 'success',
        message: 'Your green energy assessment request has been received! Our renewable energy engineers will contact you within 24 hours.'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        sector: defaultSector || 'commercial-industrial',
        solution: defaultSolution || 'commercial-industrial-solar',
        loadEstimate: '',
        timeline: '1-3-months',
        message: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({
        type: 'error',
        message: 'Unable to submit right now. Please reach out directly to us on WhatsApp or call +260-978-294-747.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="ge-assessment-form-box" onSubmit={handleSubmit} noValidate id="energy-assessment-form">
      <div className="ge-form-header">
        <div className="ge-form-badge">
          <i className="ti ti-bolt" aria-hidden="true" /> Solar &amp; Energy Assessment
        </div>
        <h3 className="ge-form-title">Request Technical Assessment &amp; Feasibility</h3>
        <p className="ge-form-subtitle">
          Provide your project requirements below. Our engineering team conducts site audits, load analysis, and bankable financial modeling across Zambia and SADC.
        </p>
      </div>

      {status.message && (
        <div className={`form-alert ${status.type === 'error' ? 'form-alert-error' : 'form-alert-success'}`} role="alert">
          <i className={`ti ${status.type === 'error' ? 'ti-alert-circle' : 'ti-circle-check'}`} aria-hidden="true" />
          <span>{status.message}</span>
        </div>
      )}

      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="ge-name">
            Full Name <span className="req">*</span>
          </label>
          <div className="input-with-icon">
            <i className="ti ti-user" aria-hidden="true" />
            <input
              type="text"
              id="ge-name"
              name="name"
              className="form-control"
              placeholder="e.g. Mwansa Banda"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="ge-org">
            Company / Organization Name
          </label>
          <div className="input-with-icon">
            <i className="ti ti-building" aria-hidden="true" />
            <input
              type="text"
              id="ge-org"
              name="organization"
              className="form-control"
              placeholder="e.g. Copperbelt Agro Mills Ltd"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="ge-email">
            Email Address <span className="req">*</span>
          </label>
          <div className="input-with-icon">
            <i className="ti ti-mail" aria-hidden="true" />
            <input
              type="email"
              id="ge-email"
              name="email"
              className="form-control"
              placeholder="m.banda@company.zm"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="ge-phone">
            Phone / WhatsApp Number <span className="req">*</span>
          </label>
          <div className="input-with-icon">
            <i className="ti ti-phone" aria-hidden="true" />
            <input
              type="tel"
              id="ge-phone"
              name="phone"
              className="form-control"
              placeholder="+260 97X XXX XXX"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="ge-sector">
            Target Sector / Facility Type
          </label>
          <div className="input-with-icon">
            <i className="ti ti-category" aria-hidden="true" />
            <select
              id="ge-sector"
              name="sector"
              className="form-control"
              value={formData.sector}
              onChange={handleChange}
            >
              {GREEN_ENERGY_SECTORS.filter((sec) => sec.id !== 'all').map((sec) => (
                <option key={sec.id} value={sec.id}>
                  {sec.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="ge-solution">
            Primary Solution of Interest
          </label>
          <div className="input-with-icon">
            <i className="ti ti-solar-panel" aria-hidden="true" />
            <select
              id="ge-solution"
              name="solution"
              className="form-control"
              value={formData.solution}
              onChange={handleChange}
            >
              {GREEN_ENERGY_SOLUTIONS.map((sol) => (
                <option key={sol.id} value={sol.id}>
                  {sol.num}. {sol.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="ge-load">
            Estimated Capacity / Peak Load (if known)
          </label>
          <div className="input-with-icon">
            <i className="ti ti-gauge" aria-hidden="true" />
            <input
              type="text"
              id="ge-load"
              name="loadEstimate"
              className="form-control"
              placeholder="e.g. 50 kW, 500 kVA, or Monthly Bill amount (ZMW)"
              value={formData.loadEstimate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="ge-timeline">
            Target Project Timeline
          </label>
          <div className="input-with-icon">
            <i className="ti ti-calendar-event" aria-hidden="true" />
            <select
              id="ge-timeline"
              name="timeline"
              className="form-control"
              value={formData.timeline}
              onChange={handleChange}
            >
              <option value="immediate">Immediate / Urgent (&lt; 1 month)</option>
              <option value="1-3-months">1 to 3 Months</option>
              <option value="3-6-months">3 to 6 Months</option>
              <option value="feasibility">Feasibility &amp; Budget Planning Stage</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="ge-message">
          Project Location, Operational Goals &amp; Specific Details
        </label>
        <div className="input-with-icon">
          <i className="ti ti-message-circle" aria-hidden="true" />
          <textarea
            id="ge-message"
            name="message"
            className="form-control form-textarea"
            rows={4}
            placeholder="Tell us about the site location (Province/Town), current electricity challenges (grid outages, generator diesel costs), roof/ground space, and specific operational requirements..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="ge-form-actions">
        <button
          type="submit"
          className="btn-green-primary btn-submit-modern"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner" aria-hidden="true" />
              <span>Submitting Request...</span>
            </>
          ) : (
            <>
              <i className="ti ti-send" aria-hidden="true" />
              <span>Submit Assessment Request</span>
            </>
          )}
        </button>

        <p className="ge-form-disclaimer">
          <i className="ti ti-shield-lock" aria-hidden="true" /> Fast technical turnaround • Direct WhatsApp notification to senior solar engineering lead.
        </p>
      </div>
    </form>
  );
}

'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in your name, email address, and message.'
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
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Server returned error');
      }

      // 2. Secondary instant interaction: Open WhatsApp
      const whatsappNumber = '260978294747';
      const waText = `*New Website Enquiry - Maktub Engineering*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone || 'N/A'}\n*Service:* ${formData.service || 'General Enquiry'}\n\n*Message:* ${formData.message}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waText)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      // 3. Clear form and show success message
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. Our team will respond shortly.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus({
        type: 'error',
        message: 'There was an issue sending your message. Please reach out to us directly via WhatsApp or phone.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form-box" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-header">
        <h3 className="contact-form-title">Send Us a Message</h3>
        <p className="contact-form-subtitle">
          Fill in your details below and we will get back to you promptly.
        </p>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="cf-name">
          Full Name <span className="req">*</span>
        </label>
        <div className="input-with-icon">
          <i className="ti ti-user" aria-hidden="true" />
          <input
            type="text"
            id="cf-name"
            name="name"
            className="form-control"
            placeholder="e.g. Clive Muyunda"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
          />
        </div>
      </div>

      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="cf-email">
            Email Address <span className="req">*</span>
          </label>
          <div className="input-with-icon">
            <i className="ti ti-mail" aria-hidden="true" />
            <input
              type="email"
              id="cf-email"
              name="email"
              className="form-control"
              placeholder="e.g. client@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="cf-phone">
            Phone / WhatsApp Number
          </label>
          <div className="input-with-icon">
            <i className="ti ti-phone" aria-hidden="true" />
            <input
              type="tel"
              id="cf-phone"
              name="phone"
              className="form-control"
              placeholder="+260 977 ..."
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="cf-service">
          Service of Interest
        </label>
        <div className="input-with-icon">
          <i className="ti ti-category" aria-hidden="true" />
          <select
            id="cf-service"
            name="service"
            className="form-control form-select"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a service category...</option>
            <optgroup label="Civil Engineering">
              <option value="Building Construction">Building Construction</option>
              <option value="Road & Bridge Construction">Road &amp; Bridge Works</option>
              <option value="Maintenance & Renovation">Maintenance &amp; Renovation</option>
            </optgroup>
            <optgroup label="Equipment Supplies & Servicing">
              <option value="Heavy Machinery Procurement">Heavy Machinery Procurement</option>
              <option value="Equipment Repair & Servicing">Equipment Repair &amp; Servicing</option>
              <option value="Spare Parts Supply">Spare Parts Supply (Komatsu/CAT/Volvo)</option>
            </optgroup>
            <optgroup label="General Supplies">
              <option value="Office & School Furniture">Office &amp; School Furniture</option>
              <option value="Stationery & Office Consumables">Stationery &amp; Consumables</option>
              <option value="Personal Protective Equipment (PPE)">PPE &amp; Safety Equipment</option>
              <option value="Construction Materials & Cement">Construction Materials (Steel/Cement)</option>
              <option value="General Hardware & Workshop Tools">General Hardware &amp; Tools</option>
            </optgroup>
            <optgroup label="Green Energy">
              <option value="Residential Solar System">Residential Solar System</option>
              <option value="Commercial & Industrial Solar">Commercial &amp; Industrial Solar</option>
              <option value="Solar Water Pumping">Solar Water Pumping / Irrigation</option>
            </optgroup>
            <option value="Other / Tender Inquiry">Other / Tender Inquiry</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="cf-message">
          Project Details / Message <span className="req">*</span>
        </label>
        <div className="input-with-icon textarea-icon">
          <i className="ti ti-message-dots" aria-hidden="true" />
          <textarea
            id="cf-message"
            name="message"
            className="form-control form-textarea"
            placeholder="Describe your project requirements, location in Zambia, scope, or timeline..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {status.message && (
        <div
          className={`form-status-alert ${status.type === 'error' ? 'status-error' : 'status-success'}`}
          role="status"
          aria-live="polite"
        >
          <i
            className={status.type === 'error' ? 'ti ti-alert-circle' : 'ti ti-check-circle'}
            aria-hidden="true"
          />
          <span>{status.message}</span>
        </div>
      )}

      <button
        type="submit"
        className="submit-btn"
        disabled={loading}
        id="submitBtn"
      >
        {loading ? (
          <>
            <span className="spinner-sm" aria-hidden="true" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <i className="ti ti-send" aria-hidden="true" />
            <span>Send Message &amp; Chat</span>
          </>
        )}
      </button>

      <p className="form-note">
        <i className="ti ti-shield-lock" aria-hidden="true" /> We respect your privacy. Standard response time is under 24 hours on business days.
      </p>
    </form>
  );
}

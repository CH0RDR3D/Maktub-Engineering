import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Maktub Engineering & General Supply Limited. Contact our Lusaka headquarters or Muchinga branch for civil construction quotes and procurement.',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <div className="contact-page-container">
      {/* 1. PAGE HEADER */}
      <section className="page-hero-header">
        <div className="page-hero-bg" aria-hidden="true" />
        <div className="section-inner page-hero-inner">
          <div className="page-hero-badge reveal">
            <i className="ti ti-headset" aria-hidden="true" /> Reach Out
          </div>
          <h1 className="page-hero-title reveal">
            Let&apos;s Build Something <span>Great Together</span>
          </h1>
          <p className="page-hero-lead reveal">
            Have a project in mind, need heavy equipment supplies, or require tender quotations? Our engineering and supply team is ready to assist.
          </p>
        </div>
      </section>

      {/* 2. CONTACT CONTENT GRID */}
      <section className="section-padding">
        <div className="section-inner">
          <div className="contact-split-grid">
            {/* Left Column: Direct Info & Locations */}
            <div className="contact-info-col reveal-left">
              <span className="section-badge">
                <i className="ti ti-map-pin-2" aria-hidden="true" /> Branch Information
              </span>
              <h2 className="contact-col-title">
                Connect Directly With <span>Our Team</span>
              </h2>
              <p className="contact-col-sub">
                Reach us via phone, email, WhatsApp, or visit our offices in Lusaka and Muchinga Province.
              </p>

              <div className="contact-cards-stack">
                {/* Phone */}
                <div className="contact-card-item">
                  <div className="contact-card-icon">
                    <i className="ti ti-phone-call" aria-hidden="true" />
                  </div>
                  <div className="contact-card-detail">
                    <div className="contact-card-label">Direct Lines</div>
                    <div className="contact-card-value">
                      <a href="tel:+260978294747">+260 978 294 747</a>
                    </div>
                    <div className="contact-card-value">
                      <a href="tel:+260966363525">+260 966 363 525</a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-card-item">
                  <div className="contact-card-icon">
                    <i className="ti ti-mail" aria-hidden="true" />
                  </div>
                  <div className="contact-card-detail">
                    <div className="contact-card-label">Official Email</div>
                    <div className="contact-card-value">
                      <a href="mailto:info@maktubengineering.com">info@maktubengineering.com</a>
                    </div>
                    <div className="contact-card-value secondary">
                      <a href="mailto:muyundaclive8@gmail.com">muyundaclive8@gmail.com</a>
                    </div>
                  </div>
                </div>

                {/* Lusaka HQ */}
                <div className="contact-card-item">
                  <div className="contact-card-icon gold">
                    <i className="ti ti-building" aria-hidden="true" />
                  </div>
                  <div className="contact-card-detail">
                    <div className="contact-card-label">Main Branch — Lusaka HQ</div>
                    <div className="contact-card-value-text">
                      Woodgate House ZSIC, Floor 6, Room 1<br />
                      Next to Stanbic, Cairo Road, Lusaka, Zambia
                    </div>
                  </div>
                </div>

                {/* Muchinga */}
                <div className="contact-card-item">
                  <div className="contact-card-icon teal">
                    <i className="ti ti-map-pin" aria-hidden="true" />
                  </div>
                  <div className="contact-card-detail">
                    <div className="contact-card-label">Muchinga Province Branch</div>
                    <div className="contact-card-value-text">
                      Chalabesa Kanchibiya Area<br />
                      Muchinga District, Muchinga Province, Zambia
                    </div>
                  </div>
                </div>
              </div>

              {/* Fast Action Buttons */}
              <div className="contact-quick-actions">
                <a
                  href="https://wa.me/260978294747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-whatsapp-action"
                >
                  <i className="ti ti-brand-whatsapp" aria-hidden="true" />
                  <span>Chat on WhatsApp (+260 978 294 747)</span>
                </a>

                <a
                  href="https://maps.google.com/?q=Woodgate+House+Cairo+Road+Lusaka+Zambia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-maps-action"
                >
                  <i className="ti ti-map-2" aria-hidden="true" />
                  <div>
                    <span>Woodgate House, Cairo Road, Lusaka</span>
                    <small>Open in Google Maps &rarr;</small>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-col reveal-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

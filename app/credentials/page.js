import Link from 'next/link';

export const metadata = {
  title: 'Credentials & Certifications',
  description: 'Review Maktub Engineering statutory registrations, PACRA incorporation, EIZ license, NCC Grade 5 certificate, ZPPA vendor clearance, and compliance documents in Zambia.',
  alternates: { canonical: '/credentials' }
};

const CREDENTIALS = [
  {
    name: 'PACRA — Patents & Companies Registration Agency',
    detail: 'Certificate of Incorporation as a Private Company Limited by Shares in Zambia. Reg No. 120200000224. Incorporated 10 January 2020.',
    status: 'Permanent',
    statusType: 'success',
    icon: 'ti ti-building-bank',
    pdf: '/resources/pdf/MAKTUBPROFILE.pdf',
    pdfLabel: 'Download Company Profile'
  },
  {
    name: 'Zambia Revenue Authority (ZRA)',
    detail: 'Taxpayer Identification Number (TPIN: 2558884909). Tax Clearance Certificate valid for public and private procurement. Registered for Turnover Tax and PAYE.',
    status: 'Valid to Dec 2026',
    statusType: 'success',
    icon: 'ti ti-receipt-tax',
    pdf: '/resources/pdf/zracert.pdf',
    pdfLabel: 'View Tax Clearance'
  },
  {
    name: 'Engineering Institute of Zambia (EIZ)',
    detail: 'Annual Practicing License 2026. Registered Engineering Organisation (R. Eng. O) authorized for Civil and Electrical/Electronics Engineering (EIZ No. SC22022038667, Class C2).',
    status: 'Valid 2026',
    statusType: 'success',
    icon: 'ti ti-building-arch',
    pdf: '/resources/pdf/EIZ2026.pdf',
    pdfLabel: 'View EIZ License'
  },
  {
    name: 'National Council for Construction (NCC)',
    detail: 'Grade 5 Category C (General Civil Engineering Works), Grade 6 Category E (General Electrical & Telecoms), Grade 4 Category R (Roads & Earthworks).',
    status: 'Valid to Dec 2026',
    statusType: 'success',
    icon: 'ti ti-crane',
    pdf: '/resources/pdf/ncc-cert.pdf',
    pdfLabel: 'View NCC Certificate'
  },
  {
    name: 'Zambia Public Procurement Authority (ZPPA)',
    detail: 'Registered e-GP Supplier for public sector tenders. CEEC Category 2 (100% Citizen Owned). Registered for building materials, office equipment, and general supplies.',
    status: 'Valid to Jun 2026',
    statusType: 'success',
    icon: 'ti ti-briefcase',
    pdf: '/resources/pdf/zppa-cert.pdf',
    pdfLabel: 'View ZPPA Certificate'
  },
  {
    name: 'Ministry of Defence — Approved Vendor',
    detail: 'Vendor Identification Number (VIN: MOD/VIN/1238/23). Security cleared to conduct procurement and infrastructure works with the Zambia Ministry of Defence.',
    status: 'Valid to Dec 2026',
    statusType: 'success',
    icon: 'ti ti-shield',
    pdf: '/resources/pdf/MinOfDef-cert.pdf',
    pdfLabel: 'View Defence Clearance'
  },
  {
    name: 'Workers’ Compensation Fund Control Board',
    detail: 'Employer Compliance Certificate (Account No. 0004507431091). Registered and compliant with the statutory Workers’ Compensation Act No. 10 of 1999.',
    status: 'Active / Registered',
    statusType: 'info',
    icon: 'ti ti-shield-heart',
    pdf: '/resources/pdf/WorkersCompensation2026.pdf',
    pdfLabel: 'View Workers Comp Cert'
  },
  {
    name: 'NAPSA — National Pension Scheme Authority',
    detail: 'Employer Account No. 5603132. Compliance Certificate No. CFC88496A17608718767461299. Ensuring full statutory pension contributions for all company personnel.',
    status: 'Valid & Compliant',
    statusType: 'info',
    icon: 'ti ti-users',
    pdf: null,
    pdfLabel: null
  }
];

export default function CredentialsPage() {
  return (
    <div className="credentials-page-container">
      {/* 1. PAGE HEADER */}
      <section className="page-hero-header">
        <div className="page-hero-bg" aria-hidden="true" />
        <div className="section-inner page-hero-inner">
          <div className="page-hero-badge reveal">
            <i className="ti ti-certificate" aria-hidden="true" /> Accreditations &amp; Compliance
          </div>
          <h1 className="page-hero-title reveal">
            Registered &amp; <span>Fully Compliant</span>
          </h1>
          <p className="page-hero-lead reveal">
            Maktub Engineering &amp; General Supply Limited is registered with all relevant statutory and regulatory authorities in Zambia, upholding top tier engineering and procurement standards.
          </p>
        </div>
      </section>

      {/* 2. CREDENTIALS GRID */}
      <section className="section-padding">
        <div className="section-inner">
          <div className="section-header-center reveal">
            <span className="section-badge">
              <i className="ti ti-shield-check" aria-hidden="true" /> Regulatory Bodies
            </span>
            <h2 className="section-title">
              Official <span>Certifications &amp; Licenses</span>
            </h2>
            <p className="section-subtitle">
              Click any certificate card below to view or download the official verification documents.
            </p>
          </div>

          <div className="credentials-cards-grid">
            {CREDENTIALS.map((cred, idx) => (
              <div key={idx} className="credential-card reveal">
                <div className="credential-card-top">
                  <div className="credential-icon-bubble">
                    <i className={cred.icon} aria-hidden="true" />
                  </div>
                  <span className={`credential-status-tag ${cred.statusType}`}>
                    <i className="ti ti-circle-check" aria-hidden="true" />
                    {cred.status}
                  </span>
                </div>

                <div className="credential-card-body">
                  <h3 className="credential-card-title">{cred.name}</h3>
                  <p className="credential-card-desc">{cred.detail}</p>
                </div>

                <div className="credential-card-footer">
                  {cred.pdf ? (
                    <a
                      href={cred.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="credential-doc-link"
                      aria-label={`Open ${cred.name} document`}
                    >
                      <i className="ti ti-file-type-pdf" aria-hidden="true" />
                      <span>{cred.pdfLabel || 'View Document'}</span>
                      <i className="ti ti-external-link external-arrow" aria-hidden="true" />
                    </a>
                  ) : (
                    <div className="credential-verified-tag">
                      <i className="ti ti-check" aria-hidden="true" />
                      <span>Verified On Record</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VERIFICATION BANNER */}
      <section className="section-padding section-alt-bg">
        <div className="section-inner">
          <div className="verification-info-box reveal">
            <div className="verification-info-icon">
              <i className="ti ti-building-arch" aria-hidden="true" />
            </div>
            <div className="verification-info-text">
              <h3 className="verification-title">Need Formal Tender Documentation?</h3>
              <p className="verification-desc">
                If your procurement department requires certified true copies of our NCC certificate, EIZ practicing license, ZRA tax clearance, or CEEC citizen-ownership profile for tender evaluation, our compliance office will furnish them immediately.
              </p>
              <div className="verification-cta-row">
                <Link href="/contact" className="btn-primary-modern">
                  <i className="ti ti-mail" aria-hidden="true" />
                  <span>Request Full Tender Dossier</span>
                </Link>
                <a href="tel:+260978294747" className="btn-ghost-modern">
                  <i className="ti ti-phone" aria-hidden="true" />
                  <span>Call Compliance Officer</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

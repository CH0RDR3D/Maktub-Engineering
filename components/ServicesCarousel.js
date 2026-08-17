'use client';

import Link from 'next/link';
import Image from 'next/image';

const FEATURED_SERVICES = [
  {
    title: 'Building Construction',
    category: 'Civil Engineering',
    img: '/resources/civileng.webp',
    href: '/services#services-section-civil',
    badge: 'NCC Grade 5'
  },
  {
    title: 'Road & Bridge Works',
    category: 'Civil Engineering',
    img: '/resources/road.webp',
    href: '/services#services-section-civil',
    badge: 'Category R'
  },
  {
    title: 'Equipment Supplies',
    category: 'Heavy Machinery',
    img: '/resources/equipment2.webp',
    href: '/services#services-section-equipment',
    badge: 'CAT / Komatsu'
  },
  {
    title: 'Machinery Repair & Servicing',
    category: 'Technical Support',
    img: '/resources/repairs2.webp',
    href: '/services#services-section-equipment',
    badge: 'Mobile Technicians'
  },
  {
    title: 'PPE & Safety Equipment',
    category: 'General Supplies',
    img: '/resources/ppe.webp',
    href: '/services#services-section-general',
    badge: 'EIZ & Labour Approved'
  },
  {
    title: 'Office & School Furniture',
    category: 'General Supplies',
    img: '/resources/office.webp',
    href: '/services#services-section-general',
    badge: 'Nationwide Delivery'
  },
  {
    title: 'Construction Materials',
    category: 'General Supplies',
    img: '/resources/construction.webp',
    href: '/services#services-section-general',
    badge: 'Bulk Supply'
  },
  {
    title: 'Spare Parts Supply',
    category: 'Heavy Machinery',
    img: '/resources/warehouse.webp',
    href: '/services#services-section-equipment',
    badge: 'OEM Components'
  }
];

export default function ServicesCarousel() {
  return (
    <div className="services-carousel-wrapper">
      <div className="services-carousel-track">
        {/* Double array for seamless infinite marquee loop */}
        {[...FEATURED_SERVICES, ...FEATURED_SERVICES].map((service, idx) => (
          <Link
            key={idx}
            href={service.href}
            className="carousel-service-card"
            aria-label={`View details for ${service.title}`}
          >
            <div className="carousel-service-img-box">
              <Image
                src={service.img}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 280px, 340px"
                className="carousel-service-img"
              />
              <div className="carousel-service-overlay" />
              <span className="carousel-service-pill">{service.badge}</span>
            </div>
            <div className="carousel-service-info">
              <span className="carousel-service-category">{service.category}</span>
              <h3 className="carousel-service-title">{service.title}</h3>
              <div className="carousel-service-link-row">
                <span>Explore Details</span>
                <i className="ti ti-arrow-right" aria-hidden="true" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

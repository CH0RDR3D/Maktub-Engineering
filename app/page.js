import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import ServicesCarousel from '../components/ServicesCarousel';

export const metadata = {
  title: 'Engineering, Construction & General Supply in Zambia',
  description: 'Maktub Engineering & General Supply Limited delivers civil construction, heavy equipment, green energy, and general supply solutions across Zambia.',
  alternates: { canonical: '/' }
};

export default function HomePage() {
  return (
    <div className="home-page-container w-full bg-[#faf9f5] dark:bg-[#0a0f0d] text-[#141c18] dark:text-[#f8fafc] overflow-x-hidden font-sans">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. STATS BAR */}
      <StatsBar
        items={[
          { target: 5, suffix: '+', label: 'Years in Business', icon: 'ti ti-calendar' },
          { target: 3, suffix: '', label: 'Service Divisions', icon: 'ti ti-tool' },
          { target: 8, suffix: '+', label: 'Accreditations & Licenses', icon: 'ti ti-certificate' },
          { target: 2, suffix: '', label: 'Provincial Branches', icon: 'ti ti-map-pin' }
        ]}
      />

      {/* 3. FEATURED SERVICES CAROUSEL */}
      <section className="py-24 sm:py-32 lg:py-36 border-b border-[#141c18]/15 dark:border-white/15">
        <div className="section-inner max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-mono text-[#141c18]/60 dark:text-white/60">
                <span>[ 02 / CAPABILITIES ]</span>
                <span>&bull;</span>
                <span>CORE ENGINEERING &amp; SUPPLIES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-[#141c18] dark:text-white font-editorial-display leading-tight">
                Featured <span className="italic font-editorial-heading text-[#d4891a] dark:text-[#fbbf24]">Services &amp; Supplies</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#141c18]/70 dark:text-white/70 leading-relaxed font-light">
              From full-scale commercial civil construction and machinery procurement to corporate supplies and certified safety wear.
            </p>
          </div>

          <div className="reveal">
            <ServicesCarousel />
          </div>

          <div className="mt-12 text-center reveal">
            <Link href="/services" className="btn-secondary-modern inline-flex">
              <span>View All Services &amp; Specifications</span>
              <i className="ti ti-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHO WE ARE */}
      <section className="py-24 sm:py-32 lg:py-36 border-b border-[#141c18]/15 dark:border-white/15 bg-[#f3f1ea]/50 dark:bg-[#0f1613]/50">
        <div className="section-inner max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-8 reveal-left">
              <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-mono text-[#141c18]/60 dark:text-white/60">
                <span>[ 03 / HERITAGE ]</span>
                <span>&bull;</span>
                <span>CITIZEN-OWNED INFRASTRUCTURE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-[#141c18] dark:text-white font-editorial-display leading-[1.02]">
                A <span className="italic font-editorial-heading text-[#d4891a] dark:text-[#fbbf24]">Zambian-Owned</span> Partner You Can Trust
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-[#141c18]/80 dark:text-white/80 font-light">
                Maktub Engineering &amp; General Supply Limited is a fully registered, citizen-owned enterprise delivering integrated engineering solutions and dependable supply services to both public and private sector clients across Zambia.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-[#141c18]/80 dark:text-white/80 font-light">
                Since our incorporation in January 2020, we have grown to handle multi-disciplinary infrastructure works, government contracts, defense procurement clearances, and high-volume corporate logistics with unwavering commitment to quality and safety.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center space-x-3 p-3 border border-[#141c18]/15 dark:border-white/15 text-xs font-mono uppercase tracking-[0.18em]">
                  <i className="ti ti-check text-[#059669] dark:text-[#34d399]" aria-hidden="true" />
                  <span>Grade 5 NCC Certified Contractor</span>
                </div>
                <div className="flex items-center space-x-3 p-3 border border-[#141c18]/15 dark:border-white/15 text-xs font-mono uppercase tracking-[0.18em]">
                  <i className="ti ti-check text-[#059669] dark:text-[#34d399]" aria-hidden="true" />
                  <span>Licensed by EIZ Registered Org</span>
                </div>
                <div className="flex items-center space-x-3 p-3 border border-[#141c18]/15 dark:border-white/15 text-xs font-mono uppercase tracking-[0.18em]">
                  <i className="ti ti-check text-[#059669] dark:text-[#34d399]" aria-hidden="true" />
                  <span>Cleared Ministry of Defence Vendor</span>
                </div>
                <div className="flex items-center space-x-3 p-3 border border-[#141c18]/15 dark:border-white/15 text-xs font-mono uppercase tracking-[0.18em]">
                  <i className="ti ti-check text-[#059669] dark:text-[#34d399]" aria-hidden="true" />
                  <span>ZPPA Registered &bull; CEEC Citizen Owned</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-primary-modern">
                  <span>Learn More About Us</span>
                  <i className="ti ti-arrow-right" aria-hidden="true" />
                </Link>
                <Link href="/credentials" className="btn-secondary-modern">
                  <i className="ti ti-file-certificate" aria-hidden="true" />
                  <span>View Certifications</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative reveal-right">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#141c18]/15 dark:border-white/15 group">
                <Image
                  src="/resources/equipment.webp"
                  alt="Maktub engineers and heavy equipment on site"
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover object-center grayscale-[15%] group-hover:grayscale-0 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#faf9f5]/95 dark:bg-[#141c18]/95 backdrop-blur-md border border-[#141c18]/10 dark:border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#059669] dark:text-[#34d399] mb-1">
                    100% ZAMBIAN OWNED
                  </div>
                  <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#141c18] dark:text-white">
                    INCORPORATED JANUARY 2020 &bull; PACRA REG NO. 120200000224
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEYOND CONSTRUCTION / GENERAL SUPPLIES */}
      <section className="py-24 sm:py-32 lg:py-36 border-b border-[#141c18]/15 dark:border-white/15">
        <div className="section-inner max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 relative reveal-left">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#141c18]/15 dark:border-white/15 group">
                <Image
                  src="/resources/civileng2.webp"
                  alt="Maktub supply chain, civil works and logistics"
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover object-center grayscale-[15%] group-hover:grayscale-0 transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#faf9f5]/95 dark:bg-[#141c18]/95 backdrop-blur-md border border-[#141c18]/10 dark:border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#1b4192] dark:text-[#60a5fa] mb-1">
                    SUPPLY CHAIN INTEGRITY
                  </div>
                  <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#141c18] dark:text-white">
                    PROMPT DELIVERY ACROSS ALL 10 PROVINCES
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 reveal-right">
              <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] font-mono text-[#141c18]/60 dark:text-white/60">
                <span>[ 04 / LOGISTICS ]</span>
                <span>&bull;</span>
                <span>DEPENDABLE PROCUREMENT</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-[#141c18] dark:text-white font-editorial-display leading-[1.02]">
                Beyond <span className="italic font-editorial-heading text-[#d4891a] dark:text-[#fbbf24]">Construction</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-[#141c18]/80 dark:text-white/80 font-light">
                Our general supply division ensures your operations never skip a beat. We supply everything from high-grade structural building materials to turnkey office ergonomics, school desks, and laboratory fittings.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-[#141c18]/80 dark:text-white/80 font-light">
                With warehouses and supply networks spanning Lusaka, the Copperbelt, and Muchinga Province, we provide dependable procurement for government ministries, NGOs, private corporations, and educational institutions.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1.5 text-xs font-mono uppercase tracking-[0.2em] border border-[#141c18]/15 dark:border-white/15">Office Furniture</span>
                <span className="px-3 py-1.5 text-xs font-mono uppercase tracking-[0.2em] border border-[#141c18]/15 dark:border-white/15">IT Hardware</span>
                <span className="px-3 py-1.5 text-xs font-mono uppercase tracking-[0.2em] border border-[#141c18]/15 dark:border-white/15">Certified PPE</span>
                <span className="px-3 py-1.5 text-xs font-mono uppercase tracking-[0.2em] border border-[#141c18]/15 dark:border-white/15">Cement &amp; Steel</span>
                <span className="px-3 py-1.5 text-xs font-mono uppercase tracking-[0.2em] border border-[#141c18]/15 dark:border-white/15">Machinery Tools</span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary-modern">
                  <i className="ti ti-message-dots" aria-hidden="true" />
                  <span>Discuss Your Supply Needs</span>
                </Link>
                <Link href="/services#services-section-general" className="btn-secondary-modern">
                  <span>Explore Supply Catalog</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GREEN ENERGY BANNER TEASER */}
      <section className="relative min-h-[80vh] border-b border-[#141c18]/15 dark:border-white/15 overflow-hidden bg-[#141c18] text-white">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/resources/green-energy/top-view-paper-with-green-energy-message.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0a0f0d]/65" />
        </div>

        {/* Content */}
        <div className="relative z-10 section-inner max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.3em] font-mono text-[#34d399]">
                <span>[ 05 / SUSTAINABILITY ]</span>
                <span>&bull;</span>
                <span>RENEWABLE ENERGY DIVISION</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-white font-editorial-display leading-[1.02]">
                Powering A <span className="italic font-editorial-heading text-[#34d399]">Greener Zambia</span>
              </h2>

              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-2xl">
                Discover our turnkey solar installations, BESS energy storage, industrial microgrids, and eco-conscious construction practices engineered to eliminate downtime and reduce electricity overheads.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/15 max-w-xl font-mono uppercase text-xs tracking-[0.2em]">
                <div>
                  <span className="text-2xl sm:text-3xl font-light text-[#34d399] block font-editorial-display">20</span>
                  <span className="text-white/60">Solutions</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-light text-[#34d399] block font-editorial-display">8</span>
                  <span className="text-white/60">EPC Stages</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-light text-[#34d399] block font-editorial-display">100%</span>
                  <span className="text-white/60">Grid Compliant</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <Link href="/green-energy" className="btn-green-primary w-full sm:w-auto text-center">
                <i className="ti ti-solar-panel" aria-hidden="true" />
                <span>Explore Green Energy Division &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAST CTA SECTION */}
      <section className="py-24 sm:py-32 lg:py-36">
        <div className="section-inner max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
          <div className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.3em] font-mono text-[#059669] dark:text-[#34d399]">
            <span>[ 06 / ACTION ]</span>
            <span>&bull;</span>
            <span>READY TO GET STARTED</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-[#141c18] dark:text-white font-editorial-display leading-tight max-w-4xl mx-auto">
            Let&apos;s Build Something <span className="italic font-editorial-heading text-[#d4891a] dark:text-[#fbbf24]">Exceptional Together</span>
          </h2>

          <p className="text-sm sm:text-base text-[#141c18]/70 dark:text-white/70 max-w-xl mx-auto font-light leading-relaxed">
            Contact our engineering and procurement specialists today for quotations, tender submissions, or project feasibility consultations.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contact" className="btn-primary-modern">
              <i className="ti ti-mail" aria-hidden="true" />
              <span>Get a Free Quote</span>
            </Link>
            <a
              href="https://wa.me/260978294747"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-modern"
            >
              <i className="ti ti-brand-whatsapp" aria-hidden="true" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


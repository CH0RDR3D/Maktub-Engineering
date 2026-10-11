import './green-energy.css';
import GreenHero from '../../components/green/GreenHero';
import GreenSolutionsCarousel from '../../components/green/GreenSolutionsCarousel';
import GreenCollections from '../../components/green/GreenCollections';
import GreenAbout from '../../components/green/GreenAbout';
import GreenProducts from '../../components/green/GreenProducts';
import GreenShowcaseBanner from '../../components/green/GreenShowcaseBanner';
import GreenBenefits from '../../components/green/GreenBenefits';
import GreenNewsletter from '../../components/green/GreenNewsletter';
import GreenEnergyClientHub from '../../components/GreenEnergyClientHub';

export const metadata = {
  title: 'Green Energy & Sustainable Infrastructure Division',
  description:
    'Integrated renewable energy, solar PV installations, BESS battery storage, microgrids, industrial hybrid power, and EPC delivery across Zambia and Southern Africa.',
  alternates: { canonical: '/green-energy' },
  openGraph: {
    title: 'Green Energy & Sustainable Infrastructure | Maktub Engineering',
    description:
      'Powering a cleaner, more resilient and productive future. Integrated renewable power and energy infrastructure tailored for Zambia and regional African markets.',
    images: ['/resources/green-energy/60056.webp']
  }
};

export default function GreenEnergyPage() {
  return (
    <div className="green-energy-editorial-root w-full bg-[#faf9f5] dark:bg-[#090d16] text-[#141c18] dark:text-[#f8fafc] overflow-x-hidden font-sans">
      {/* 1. HERO SECTION */}
      <GreenHero />

      {/* 2. CLEAN ENERGY FLEET CAROUSEL (Infinite animated marquee of 10 solution assets) */}
      {/* <GreenSolutionsCarousel /> */}

      {/* 3. FEATURED SOLUTION SECTORS (4 visual-first editorial cards with authentic field imagery) */}
      <GreenCollections />

      {/* 3. ABOUT MAKTUB GREEN DIVISION (Split layout, site engineering imagery, EIZ/NCC credentials) */}
      <GreenAbout />

      {/* 4. FEATURED SOLUTIONS & TURNKEY PACKAGES (Responsive grid with category filter tabs) */}
      <GreenProducts />

      {/* 5. IMAGE SHOWCASE BANNER (Edge-to-edge renewable farm visual with quote overlay & technical coordinates) */}
      <GreenShowcaseBanner />

      {/* 6. FEATURED BENEFITS & THE MAKTUB STANDARD (4 minimalist framed icon cards with hairline borders) */}
      <GreenBenefits />

      {/* 7. INTERACTIVE TECHNICAL SUITE (Tabbed Solar Calculator, 8-Stage Delivery Model, Regulatory & Assessment) */}
      <div className="border-t border-[#141c18]/15 dark:border-white/15">
        <GreenEnergyClientHub />
      </div>

      {/* 8. REGIONAL ENERGY INTELLIGENCE DISPATCH (Newsletter dispatch) */}
      <GreenNewsletter />
    </div>
  );
}

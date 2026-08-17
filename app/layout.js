import '../styles.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import InteractiveMesh from '../components/InteractiveMesh';
import { Plus_Jakarta_Sans, Outfit, Space_Grotesk } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-main',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://maktubengineering.com'),
  title: {
    default: 'Maktub Engineering & General Supply Limited',
    template: '%s | Maktub Engineering'
  },
  description: 'Integrated engineering solutions, civil construction, heavy equipment supplies, and green energy installations across Zambia.',
  keywords: [
    'Maktub Engineering',
    'Engineering Zambia',
    'Civil Construction Lusaka',
    'NCC Grade 5 Zambia',
    'EIZ Registered Contractor',
    'Equipment Supplies Zambia',
    'Solar Installation Zambia',
    'Zambian Owned Company'
  ],
  authors: [{ name: 'Maktub Engineering & General Supply Limited' }],
  creator: 'Maktub Engineering & General Supply Limited',
  publisher: 'Maktub Engineering & General Supply Limited',
  icons: {
    icon: '/images/maktub-logo.ico',
    apple: '/images/maktub-logo.webp'
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZM',
    url: 'https://maktubengineering.com',
    siteName: 'Maktub Engineering & General Supply Limited',
    title: 'Maktub Engineering & General Supply Limited',
    description: 'Empowering your vision by helping you build stronger structures. Proudly Zambian-owned.',
    images: [
      {
        url: '/images/maktub-logo.png',
        width: 800,
        height: 800,
        alt: 'Maktub Engineering Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maktub Engineering & General Supply Limited',
    description: 'Empowering your vision by helping you build stronger structures. Proudly Zambian-owned.',
    images: ['/images/maktub-logo.png']
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'Maktub Engineering & General Supply Limited',
  image: 'https://maktubengineering.com/images/maktub-logo.png',
  description: 'Zambian-owned integrated engineering solutions, civil construction, equipment supplies, and solar installations.',
  telephone: '+260978294747',
  email: 'info@maktubengineering.com',
  url: 'https://maktubengineering.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Woodgate House ZSIC, Floor 6, Room 1, Cairo Road',
    addressLocality: 'Lusaka',
    addressRegion: 'Lusaka Province',
    addressCountry: 'ZM'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -15.4216,
    longitude: 28.2831
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
        {/* Anti-FOUC Theme Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                var theme = localStorage.getItem('theme');
                if (!theme) {
                  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                document.documentElement.setAttribute('data-theme', theme);
              } catch(e){}
            })();`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${outfit.variable} ${spaceGrotesk.variable}`}>
        <a className="skip-link" href="#page-container">
          Skip to main content
        </a>
        <InteractiveMesh />
        <Navbar />
        <main id="page-container" tabIndex={-1}>
          {children}
        </main>
        <ScrollReveal />
        <Footer />
      </body>
    </html>
  );
}

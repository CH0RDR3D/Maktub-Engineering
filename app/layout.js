import '../styles.css';
import SiteHeader from './site-header';
import SiteFooter from './site-footer';
import LegacyInteractions from './legacy-interactions';

export const metadata = {
  metadataBase: new URL('https://maktubengineering.com'),
  title: {
    default: 'Maktub Engineering & General Supply Limited',
    template: '%s | Maktub Engineering'
  },
  description: 'Integrated engineering solutions, civil construction, and dependable supply services across Zambia.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Maktub Engineering & General Supply Limited',
    images: ['/images/maktub-logo.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#page-container">Skip to main content</a>
        <SiteHeader />
        <main id="page-container" tabIndex={-1}>{children}</main>
        <LegacyInteractions />
        <SiteFooter />
      </body>
    </html>
  );
}

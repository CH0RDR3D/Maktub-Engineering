import LegacyPage from '../legacy-page';

export const metadata = {
  title: 'Services',
  description: 'Explore civil engineering, equipment servicing, and general supply services across Zambia.',
  alternates: { canonical: '/services' }
};

export default function ServicesPage() {
  return <LegacyPage page="services" />;
}

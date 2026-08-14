import LegacyPage from '../legacy-page';

export const metadata = {
  title: 'Contact Us',
  description: 'Contact Maktub Engineering in Lusaka or Muchinga for construction and supply enquiries.',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return <LegacyPage page="contact" />;
}

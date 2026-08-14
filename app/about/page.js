import LegacyPage from '../legacy-page';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Maktub Engineering, a Zambian-owned engineering and general supply company.',
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return <LegacyPage page="about" />;
}

import { GREEN_ENERGY_SOLUTIONS } from '../lib/greenEnergyData';

const siteUrl = 'https://maktubengineering.com';

export default function sitemap() {
  const baseRoutes = ['', '/about', '/services', '/green-energy', '/credentials', '/contact'];
  
  const staticEntries = baseRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8
  }));

  const solutionEntries = GREEN_ENERGY_SOLUTIONS.map((sol) => ({
    url: `${siteUrl}/green-energy/${sol.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  return [...staticEntries, ...solutionEntries];
}


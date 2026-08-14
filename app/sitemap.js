const siteUrl = 'https://maktubengineering.com';

export default function sitemap() {
  const routes = ['', '/about', '/services', '/green-energy', '/credentials', '/contact'];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7
  }));
}

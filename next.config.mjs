/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  async redirects() {
    return [
      { source: '/', has: [{ type: 'query', key: 'page', value: 'about' }], destination: '/about', permanent: false },
      { source: '/greenenergy', destination: '/green-energy', permanent: false },
      { source: '/certs', destination: '/credentials', permanent: false }
    ];
  }
};

export default nextConfig;

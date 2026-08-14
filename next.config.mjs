/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  async redirects() {
    return [
      { source: '/:path*', has: [{ type: 'query', key: 'page', value: 'about' }], destination: '/about', permanent: true },
      { source: '/greenenergy', destination: '/green-energy', permanent: true },
      { source: '/certs', destination: '/credentials', permanent: true }
    ];
  }
};

export default nextConfig;

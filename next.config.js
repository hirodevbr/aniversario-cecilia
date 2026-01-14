/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
        pathname: '/gensin-impact/**',
      },
      {
        protocol: 'https',
        hostname: '**.wikia.nocookie.net',
      },
    ],
  },
};

module.exports = nextConfig;

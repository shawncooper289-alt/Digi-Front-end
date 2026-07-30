/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nova-cdn.ace.ai',
      },
    ],
  },
};

module.exports = nextConfig;

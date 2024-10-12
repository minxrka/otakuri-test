/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'anilibria.top',
      },
      {
        protocol: 'https',
        hostname: 'static.litelibria.com',
      },
    ],
  },
};

export default nextConfig;

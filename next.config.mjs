/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath:
    process.env.NODE_ENV === 'production' ? '/mayfestproductions.com' : '',
  assetPrefix:
    process.env.NODE_ENV === 'production' ? '/mayfestproductions.com/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjs.org',
        pathname: '/icons/**',
      },
    ],
  },
};

export default nextConfig;

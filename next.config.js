/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        pathname: "/**",
        hostname: "m.media-amazon.com",
        protocol: "https",
      },
    ],
  },
  transpilePackages: ["swiper"],
};

module.exports = nextConfig;

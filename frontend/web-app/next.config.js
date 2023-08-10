/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["cdn.pixabay.com", "pixabay.com"],
  },
  output: "standalone",
};

module.exports = nextConfig;

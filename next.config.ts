import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fengyenchen.github.io',
      },
    ],
  },
};

export default nextConfig;

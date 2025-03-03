import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',

  basePath: "/gitdown",
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "techhelpbd.com",
      },
      {
        protocol: "https",
        hostname: "cdn.buymeacoffee.com",
      },
      {
        protocol: "https",
        hostname: "opengraph.githubassets.com",
      },
    ],
  },
};

export default nextConfig;

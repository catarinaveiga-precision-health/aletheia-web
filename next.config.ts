import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/aletheia-web',
  assetPrefix: '/aletheia-web/',
};

export default nextConfig;

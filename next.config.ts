import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-a229d0d6a89046e4adb65276c1f5cc47.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

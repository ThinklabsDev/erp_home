import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopack: {
      resolveAlias: {
        "~": "./src",
        "@": "./src",
      },
    },
  },
  reactCompiler: true,
};

export default nextConfig;

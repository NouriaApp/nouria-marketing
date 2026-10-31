import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/r/:token([a-f0-9]{32})",
        destination: "https://us-central1-nouria-f6800.cloudfunctions.net/sharedRecipePage/r/:token",
      },
    ];
  },
};

export default nextConfig;

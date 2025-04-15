/** @type {import('next').NextConfig} */

import createNextIntPlugin from "next-intl/plugin";
const withNextIntl = createNextIntPlugin("./i18n.js");

const nextConfig = {
  // Optional: detects from browser

  async redirects() {
    return [
      // Basic redirect
      {
        source: "/en/dashboard",
        destination: "/en/dashboard/home",
        permanent: true,
      },
      {
        source: "/ar/dashboard",
        destination: "/ar/dashboard/home",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mazenwaleed.pythonanywhere.com",
        // port: "8000",
        // pathname: "/**",
      },
    ],
  },

  devIndicators: false,
};

export default withNextIntl(nextConfig);

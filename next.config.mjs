/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/dashboard",
        destination: "/dashboard/home",
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
};

export default nextConfig;

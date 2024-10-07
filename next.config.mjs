/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ucarecdn.com",
        // Ensure that the path is correctly formed and not concatenated with another URL
      },
      {
        protocol: "https",
        hostname: "cdn.brandfetch.io",
        // Ensure that the path is correctly formed and not concatenated with another URL
      },
    ],
  },
};

export default nextConfig;
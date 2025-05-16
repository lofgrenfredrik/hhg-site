/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig

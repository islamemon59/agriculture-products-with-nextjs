/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "i.ibb.co",
      },
      {
        protocol: 'https',
        hostname: "ui-avatars.com" ,
      },
      {
        protocol: 'https',
        hostname: "img.icons8.com" ,
      },
    ],
  },
};

export default nextConfig;

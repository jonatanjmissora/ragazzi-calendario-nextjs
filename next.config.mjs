/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
    MONGODB_URI: process.env.MONGODB_URI,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
      {
        protocol: 'https',
        hostname: "grupotiempodigital.com.ar",
      },
      {
        protocol: 'https',
        hostname: "www.infoedes.com",
      },
      {
        protocol: 'https',
        hostname: "jotafi.com.ar",
      },
      {
        protocol: 'https',
        hostname: "www.moralesyasociados.com.ar",
      },
    ],
  },
};

export default nextConfig;

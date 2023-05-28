const { execSync } = require('child_process');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
    ],
  },
  // Run prisma generate during the production build
  webpack: (config, { isServer }) => {
    if (process.env.NODE_ENV === 'production' && isServer) {
      execSync('npx prisma generate');
    }
    return config;
  },
};

module.exports = nextConfig;

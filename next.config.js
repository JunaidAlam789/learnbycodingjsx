/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {remotePatterns: [
    {
      protocol: 'https',
      hostname: 'product-app-101-server.vercel.app',
      port: '',
      pathname: '/images/**',
    },
  ],
},  
}

module.exports = nextConfig

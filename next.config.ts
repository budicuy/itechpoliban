import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https'
      }
    ]
  },
  output: 'standalone',
  reactCompiler: true
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  images: {
    remotePatterns: [
      {
        hostname: 'ssl.pstatic.net'
      },
      {
        hostname: 'k.kakaocdn.net'
      }
    ]
  }
}

module.exports = nextConfig

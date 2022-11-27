/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "main.scss";`
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.cellfit.vn/:path*',
      },
    ]
  },
}

module.exports = nextConfig

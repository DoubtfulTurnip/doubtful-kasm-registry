/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Doubtful Kasm Registry',
    description: 'A mash of custom images',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/DoubtfulTurnip/',
    contactUrl: 'https://github.com/DoubtfulTurnip/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

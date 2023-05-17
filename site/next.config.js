/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Doubtful Kasm Registry',
    description: 'A mash of custom images',
    icon: 'https://avatars.githubusercontent.com/u/23531986?v=4',
    listUrl: 'https://doubtfulturnip.github.io/doubtful-kasm-registry/',
    contactUrl: 'https://github.com/DoubtfulTurnip/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/doubtful-kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig

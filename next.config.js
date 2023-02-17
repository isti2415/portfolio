/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['photos.app.goo.gl'],
  },
}

module.exports = nextConfig

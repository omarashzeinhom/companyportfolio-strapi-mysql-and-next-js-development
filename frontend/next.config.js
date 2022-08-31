/** @type {import('next').NextConfig} */

//add path required for sassOptions
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig

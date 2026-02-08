const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Supprime turbo
  // turbo: {},

  // Active le static export
  output: 'export',
  trailingSlash: true,
  basePath: '/yb-portfolio',
};

module.exports = withNextIntl(nextConfig);

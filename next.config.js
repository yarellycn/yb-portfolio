const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Supprime turbo
  // turbo: {},

  // Nécessaire pour l'export gh-pages
  // output: 'export',
  // trailingSlash: true,
  // basePath: '/yb-portfolio',
};
 
module.exports = withNextIntl(nextConfig);
const withPWA = require('next-pwa')({
  dest: 'public',
  dynamicStartUrl: false,
  register: false,
  skipWaiting: false,
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  reactStrictMode: true,
});

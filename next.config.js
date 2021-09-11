const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    dynamicStartUrl: false,
    register: false,
    skipWaiting: false,
  },
  reactStrictMode: true,
});

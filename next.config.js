const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    dynamicStartUrl: false,
  },
  reactStrictMode: true,
});

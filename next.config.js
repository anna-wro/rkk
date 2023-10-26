const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development',
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    dynamicStartUrl: false,
    register: false,
    skipWaiting: false,
});

module.exports = withPWA(nextConfig);
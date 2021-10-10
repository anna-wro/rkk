const withPWA = require('next-pwa');
const withTM = require('next-transpile-modules')([
  '@pusher/push-notifications-web',
]);

module.exports = withTM(
  withPWA({
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
      dynamicStartUrl: false,
      register: false,
      skipWaiting: false,
      importScripts: ['/service-worker.js'],
    },
    reactStrictMode: true,
  }),
);

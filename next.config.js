const withPWA = require('@ducanh2912/next-pwa');
const { withSentryConfig } = require('@sentry/nextjs');

const config = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
      {
        source: '/sitemap/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL_API}/sitemap/:path*`,
      },
      {
        source: '/auth/apple/redirect',
        destination: '/signin',
      },
    ];
  },
};
module.exports = withSentryConfig(
  withPWA.default({
    ...config,
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    dest: 'public',
    fallbacks: {
      //image: "/static/images/fallback.png",
      document: "/offline", // if you want to fallback to a custom page rather than /_offline
      // font: '/static/font/fallback.woff2',
      // audio: ...,
      // video: ...,
    },
    workboxOptions: {
      disableDevLogs: true,
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
      }
      return config;
    },
  }),
  {
    silent: true,
    configFile: './sentry.client.config.js',
  }
);

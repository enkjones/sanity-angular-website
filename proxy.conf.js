const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://v4rkwc81.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;
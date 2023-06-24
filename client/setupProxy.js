const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://bapu-portfolio-server.onrender.com/',
      changeOrigin: true,
    })
  );
};

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://bapu-portfolio-server.render.com',
      changeOrigin: true,
    })
  );
};

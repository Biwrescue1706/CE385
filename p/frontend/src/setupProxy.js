const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5001', // URL ของเซิร์ฟเวอร์
      changeOrigin: true,
    })
  );
};

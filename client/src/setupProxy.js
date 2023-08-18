const { createProxyMiddleware } = require('http-proxy-middleware');

//server 포트와 proxy 설정
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.REACT_APP_SERVER_URL,
      changeOrigin: true,
    })
  );
};

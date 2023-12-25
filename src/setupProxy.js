const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api/weather',
        createProxyMiddleware({
            target: 'https://api.weather.yandex.ru/v2/forecast',
            changeOrigin: true,
            headers: {
                'X-Yandex-API-Key': '8fae10d0-68b0-436d-b6f7-4dd3a3040e3e',
                'Content-Type': 'application/json',
            },
        })
    );
};
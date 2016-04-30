const Koa = require('koa');
const serve = require('koa-static');
const webpack = require('webpack');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');
const config = require('../webpack.config.js');

const app = new Koa();
const bundler = webpack(config);
app.use(serve('static'));
app.use(webpackDevMiddleware(bundler));
app.use(webpackHotMiddleware(bundler));

app.listen(3001, () => console.log('app server started on port 3000'));

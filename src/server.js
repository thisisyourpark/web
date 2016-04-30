const Koa = require('koa');
const serve = require('koa-static');
const config = require('../config');

const app = new Koa();
app.use(serve('static'));
app.use(serve('dist'));

if (process.env.NODE_ENV != 'PRODUCTION') {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config.js');
  const bundler = webpack(webpackConfig);
  const webpackDevMiddleware = require('koa-webpack-dev-middleware');
  const webpackHotMiddleware = require('koa-webpack-hot-middleware');
  app.use(webpackDevMiddleware(bundler));
  app.use(webpackHotMiddleware(bundler));
}

app.listen(process.env.port || config.get('app:port'), () => console.log(`app server started on port ${config.get('app:port')}`));

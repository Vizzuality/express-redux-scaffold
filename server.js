'use strict';

const path = require('path');
const koa = require('koa');
const serve = require('koa-static');
const webpackDevServer = require('koa-webpack-dev');

const port = process.env.PORT || 3000;
const app = koa();

if (process.env.NODE_ENV === 'production') {
  app.use(serve(path.join(__dirname, 'build')));
} else {
  app.use(webpackDevServer({
    config: './webpack.config.js'
  }));
}

app.use(serve(path.join(__dirname, 'public')));

app.listen(port);

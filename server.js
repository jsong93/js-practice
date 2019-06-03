const express = require('express'),
  webpack = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  app = express(),
  config = require('./webpack.config.js'),
  compiler = webpack(config);

// 告诉express 用webpackDevMiddleware  和  webpack.config.js
app.use(
  webpackDevMiddleware(compiler, { publicPath: config.output.publicPath })
);

app.listen(3000, () => {
  console.log('example app listening on port 3000');
});

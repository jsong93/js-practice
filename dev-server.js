const webpackDevServer = require('webpack-dev-server'),
  webpack = require('webpack'),
  config = require('./webpack.config.js'),
  complier = webpack(config),
  options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
  },
  server = new webpackDevServer(complier, options);

webpackDevServer.addDevServerEntrypoints(config, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server lisenting on 5000');
});

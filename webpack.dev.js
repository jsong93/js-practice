const merge = require('webpack-merge'),
  common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist/'
  }
});

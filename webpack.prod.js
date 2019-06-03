const merge = require('webpack-merge'),
  common = require('./webpack.common'),
  UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
  webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    // 压缩 删除dead code
    new UglifyJSPlugin({
      sourceMap: false
    }),
    // 加了一个生产环境的环境变量
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});

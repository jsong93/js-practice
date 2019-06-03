const path = require('path'),
  CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin,
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: 'production' })
  ],
  // 压缩css用的loader
  module: { rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }] },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

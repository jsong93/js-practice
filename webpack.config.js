const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin,
  ManifestWebpackPlugin = require('webpack-manifest-plugin'),
  webpack = require('webpack');

module.exports = {
  // entry: './src/index.js',
  entry: {
    app: './src/index.js'
    // print: './src/print.js'
    // 发布后代码放在那 内存中
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  // 可以帮助我们 定位错误 查看到源码
  devtool: 'inline-source-map',
  // 端口8080  但是有的时候是8081呢
  //  webpack-dev-server --open
  // webpack-dev-server --open --port 3001
  //  可以没有
  devServer: {
    contentBase: './dist',
    // module.hot 才能为true
    hot: true
  },
  module: { rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }] },

  // 在 压缩的js中 删除 dead code
  // 注意，也可以在命令行接口中使用 --optimize-minimize 标记，来使用 UglifyJSPlugin。
  mode: 'production',
  // devtool: 'cheap-source-map',
  // devtool: 'eval-source-map',
  plugins: [
    // "clean-webpack-plugin": "^2.0.2",
    // new CleanWebpackPlugin(),
    // 1.0.1
    // new CleanWebpackPlugin(['dist']),
    new CleanWebpackPlugin(),
    // 在dist文件夹中 自动新建index.html  并且所有的bundle会自动添加到index.html中
    new HtmlWebpackPlugin({
      title: 'output management'
    }),
    // manfiest 载货单
    // 可以生成一个manifest.json 文件 记录了打包的文件
    new ManifestWebpackPlugin(),
    // 以便更容易查看要修补(patch)的依赖
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

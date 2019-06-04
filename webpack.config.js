const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin,
  ManifestWebpackPlugin = require('webpack-manifest-plugin'),
  webpack = require('webpack'),
  WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  // entry: './src/index.js',
  entry: {
    app: './src/index.js'
    // another: './src/another-module.js',
    // dynamicIndex: './src/dynamicIndex.js'
    // lazyIndex: './src/lazyIndex.js',
    // vender: ['lodash']
    // print: './src/print.js'
    // 发布后代码放在那 内存中
  },
  output: {
    // filename: '[name].bundle.js',
    // hash值
    //HotModuleReplacementPlugin 热替换会影响chunkhash
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
    // chunkFilename: '[name].bundle.js'
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
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // { test: require.resolve('./src/index.js'), use: 'imports-loader?this=>window' }
      // 可以导出一些没有 exports的文件
      {
        test: require.resolve('./src/globals.js'),
        use: 'exports-loader?file,parse=helpers.parse'
      }
    ]
  },

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
    // new webpack.HotModuleReplacementPlugin(),

    // 代码改变不会影响  vender.js
    new webpack.HashedModuleIdsPlugin(),

    // 用到lodash的时候自动导入
    new webpack.ProvidePlugin(
      { _: 'lodash' }
      // 也可以直接导入某个方法
      // { join: ['lodash', 'join'] }
    ),

    // 服务停止后  还在运行
    new WorkboxPlugin.GenerateSW({
      // 这些选项帮助 serviceworkers 快速启用
      // 不允许遗留任何  旧的  serviceworkders  啥意思
      clientsClaim: true,
      skipWaiting: true
    })

    // 提取公共的模块 比如都用到lodash  方法已经被删除了
    // Error: webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common'
    // })
  ],
  // 提取公共模块
  optimization: {
    splitChunks: {
      // cacheGroups is an object where keys are the cache group names. All options from the ones listed above are possible: chunks, minSize, minChunks, maxAsyncRequests, maxInitialRequests, name. 可以自己设置一组一组的cache group来配对应的共享模块
      cacheGroups: {
        vender: {
          name: 'vender',
          chunks: 'all',
          minChunks: 2
        },
        commons: {
          name: 'common',
          chunks: 'initial', // chunks 有三个可选值，”initial”, “async” 和 “all”. 分别对应优化时只选择初始的chunks，所需要的chunks 还是所有chunks
          minChunks: 2 //minChunks 是split前，有共享模块的chunks的最小数目 ，默认值是1， 但我看示例里的代码在default里把它重写成2了，从常理上讲，minChunks = 2 应该是一个比较合理的选择吧。
        }
      }
    }
  }
};

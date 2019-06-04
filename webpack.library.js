const path = require('path');

module.exports = {
  entry: './webpack-library/src/index.js',
  output: {
    path: path.resolve(__dirname, './webpack-library/dist'),
    filename: 'webpack-numbers.js',
    library: 'webpackNumber',
    libraryTarget: 'umd'
  },
  // 外部化   不打包lodash  需要lodash依赖
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
};

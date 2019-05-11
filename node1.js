// 文件流模块
const fs = require('fs');
// 压缩模块
const zlib = require('zlib');
const gzip = zlib.createGzip();
const outStream = fs.createWriteStream('output.js.gz');

// 压缩输出
fs.createReadStream('./es6-2.js')
  .pipe(gzip)
  .pipe(outStream);

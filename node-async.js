const async = require('async');

// 按顺序执行 串行 but async不是异步吗？？？
async.series([
  a => {
    setTimeout(() => {
      console.log('a');
      a();
    }, 1000);
  },
  a => {
    setTimeout(() => {
      console.log('b');
      a();
    }, 500);
  }
]);
// 异步 并行的 parallel 平行的
async.parallel([
  a => setTimeout(() => console.log(1), 1000),
  a => setTimeout(() => console.log(2), 100)
]);

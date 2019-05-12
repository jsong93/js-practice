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

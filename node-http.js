const http = require('http');
// 可以设置动态端口
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  // end
  res.end('Hello world');
  // res.send is not a function
  //   res.send('Hello world');
});

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

// 调试 还没弄明白
// node --inspect --debug-brk

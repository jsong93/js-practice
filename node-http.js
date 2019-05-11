const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  // end
  res.end('Hello world');
  // res.send is not a function
  //   res.send('Hello world');
});

server.listen(port, () => {
  console.log('Server listening on 8080');
});

// 调试 还没弄明白
// node --inspect --debug-brk
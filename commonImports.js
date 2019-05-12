// 可以不加js
const commonjs = require('./common');
const commonjs2 = require('./common2');
// const commonjs = require('./common.js');
// const commonjs2 = require('./common2.js');

commonjs.sayHelloName();

console.log(commonjs2.name);
// console.log(commonjs.name);

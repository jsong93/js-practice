const name = 'jsong';
const age = 1;

const sayHelloName = function() {
  console.log(name);
};
exports.jsong = 1;
module.exports = { name, age, sayHelloName };
// { name: 'jsong', age: 1, sayHelloName: [Function: sayHelloName] } exports 被忽略
console.log(module.exports);

const name = 'jsong';
const age = 1;

const sayHelloName = function() {
  console.log(name);
};

module.exports = { name, age, sayHelloName };
// { name: 'jsong', age: 1, sayHelloName: [Function: sayHelloName] }
console.log(module.exports);

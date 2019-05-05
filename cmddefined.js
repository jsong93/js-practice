define(function(require, exports, module) {
  const name = 'jsong';
  const age = 11;
  const sayHello = () => {
    console.log(`hello ${name}`);
  };
  module.exports = { name, sayHello };
  console.log(module.exports);
});

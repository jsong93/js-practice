define(['moduel'], () => {
  'use strict';
  const name = 'jsong';

  const sayHello = function() {
    console.log(`hello ${name}`);
  };

  return { name, sayHello };
});

// console.log(a);
(() => {
  //   console.log(a);
  if (true) {
    // var 声明 变量提升
    // var a = 2;
    a = 2;
  }
  console.log(a);
})();
console.log(a);

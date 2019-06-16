// js 作用域学习
// a = 1;
{
  console.log('---------------------变量提升----------------');
  console.log(a);
  console.log(b);
  var a = 2;
  console.log('--------------------------------------------');
}

// function b() {}

{
  console.log('-----------------引擎查找LHS&RHS---------------------')
  function foo(a) {
    var b = a;
    return a + b;
  }

  var c = foo(2);
  console.log('-------------------------------------------------')
}

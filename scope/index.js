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
  console.log('-----------------引擎查找LHS&RHS---------------------');
  function foo(a) {
    var b = a;
    return a + b;
  }

  var c = foo(2);
  console.log('-------------------------------------------------');
}

{
  console.log('-------------------词法欺骗eval-----------------------');
  function foo(str, a) {
    // 'use strict'; // 严格模式下 eval不好使
    eval(str);
    console.log(a, b); // 1 3

    // 也可以时限词法欺骗
    setTimeout('var d = 1');
    setTimeout(() => console.log(d, 'd'));

    // new Function(param1,parma2,param3,...functionBody)
    var e = new Function('a', 'b', 'return a+b');
    console.log(e(1, 2)); // 3
  }
  var b = 2;

  foo(' var b = 3;', 1);

  console.log('-------------------------------------------------');
}

{
  console.log('----------------------词法欺骗with--------------------');
  function foo(obj) {
    with (obj) {
      a = 2;
    }
  }

  var o1 = {
    a: 3
  };

  var o2 = {
    b: 3
  };
  foo(o1);
  console.log(o1.a);
  console.log(a);

  foo(o2);
  console.log(o2.a);
  console.log(a);
  console.log('------------------------------------------------------');
}

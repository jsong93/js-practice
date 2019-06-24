// js 作用域学习
// a = 1;
{
  console.log('---------------------变量提升1----------------');
  console.log(a);
  console.log(b);
  var a = 2;
  console.log('--------------------------------------------');
}

{
  console.log('---------------------变量提升2-------------------------');
  a = 2;
  var a;
  console.log(a);
  console.log('--------------------------------------------------');
}

{
  console.log('--------------------变量提升3函数优先-------------------------');
  console.log(aa);
  if (true) {
    var aa = 1;
  } else {
    var aa = 2;
  }

  console.log('--------------------------------------------------');
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

{
  (function() {
    // (function foo() {
    console.log('foo', 1);
    // var i = 0;
    // while (i < 5) {
    // arguments.callee();
    // }
  })();
  // foo();
}

{
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);

  if (i) {
    var m = 10;
  }
  console.log('j', 10);
  try {
    undefined();
  } catch (error) {
    console.error(error);
  }
  // undefined();
  console.log('after error');
}

{
  console.log('-----------------------let-------------------');
  let j = 0;
  for (j = 0; j < 10; j++) {
    let i = j;
    console.log(i);
  }
  console.log('--------------------------------------------');
}

{
  console.log('-----------------------块级作用域-------------------');
  for (var m = 0; m < 10; m++) {
    console.log(m);
  }
  console.log(m);
  console.log('--------------------------------------------');
}
// console.log(m);

{
  console.log('--------------------函数作用域------------------------');
  var a = 2;
  function foo() {
    var a = 3;
    console.log(a);
  }
  foo();
  console.log(a);
  console.log('--------------------------------------------');
}

{
  console.log('------------------变量提升-----------------');
  a = 2;
  var a;
  console.log(a); // 2
  console.log('-------------------------------------------');
}

{
  console.log('------------------变量提升-----------------');
  console.log(a1); // undefined
  var a1 = 2;
  console.log('-------------------------------------------');
}

{
  console.log('------------------变量提升-----------------');
  foo();
  function foo() {
    console.log('foo');
  }
  console.log('-------------------------------------------');
}

{
  console.log('------------------变量提升-----------------');
  foo1(); // TypeError
  var foo1 = function foo() {
    console.log('foo');
  };
  console.log('-------------------------------------------');
}

{
  console.log('------------------变量提升-----------------');
  foo2(); // TypeError
  var foo2;

  foo2 = function() {
    console.log('foo');
  };
  console.log('-------------------------------------------');
}

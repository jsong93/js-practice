(() => {
  var obj = {
    id: 'awesome',
    cool: function coolFn() {
      console.log(this.id);
    }
  };

  var id = 'not awesome';
  obj.cool();
  setTimeout(obj.cool);
})();

var obj = {
  id: 'awesome',
  cool: function coolFn() {
    console.log(this.id);
  }
};

var id = 'not awesome';
obj.cool(); // awesome
setTimeout(obj.cool); // 执行时 调用obj.cool 的是null  默认是windows not awesome

(() => {
  function foo(num) {
    console.log('foo:' + num);
    this.count++; // 调用时候的this 指向windows 创建全局变量 count
  }

  foo.count = 0;
  for (let i = 0; i < 10; i++) {
    if (i > 5) {
      foo(i);
    }
  }

  console.log(foo.count);
})();

(() => {
  function baz() {
    var a = 0;
    console.log('baz', this.a);
    bar();
  }

  function bar() {
    var a = 1;
    console.log('baz', this.a);
    foo();
  }

  function foo() {
    var a = 2;
    console.log('baz', this.a);
  }

  baz();
})();
// var a = 3;
(() => {
  // 'use strict';
  function foo() {
    // 'use strict'; // 严格模式下this为undefinedUncaught TypeError: Cannot read property 'a' of undefined
    console.log('默认绑定', this.a);
  }

  var a = 2; // 2
  foo();
  (() => {
    'use strict';
    foo();
  })();
})();

(() => {
  function foo() {
    console.log('隐式绑定', this.a);
  }

  var obj = {
    a: 2,
    foo
    // foo2: function foo2() {
    //   console.log('foo2');
    // }
  };

  obj.foo();
  // foo2();
})();

(() => {
  function foo() {
    console.log('隐式绑定', this.a);
  }

  var obj2 = {
    a: 3,
    foo
  };
  var obj1 = {
    a: 2,
    obj2
  };

  obj1.obj2.foo();
  var bar = obj1.obj2.foo;
  bar(); // 隐式丢失
  // foo2();
})();

var a = 33;
(() => {
  function foo(arg) {
    console.log(arg, this.a);
  }

  var obj = { a: 2 };

  var obj2 = { a: 3 };

  foo.call(obj, 'call'); // call 2
  foo.apply(obj, ['apply']); // apply 2
  var bar = foo.bind(obj);
  bar('bind'); // bind 2
  bar.call(window, 'bind window');
  foo.bind(obj2, 'bind2')('binddd'); // bind2 3

  foo.call(null, 'window');
  foo.call(undefined, 'wondow');

  foo.call(1, 'call'); // call 2

  function baz() {
    foo.call(obj, '硬绑定');
  }

  baz(); // 硬绑定 2
  baz.call(window); // 硬绑定 2
})();

(() => {
  function foo(a) {
    this.a = a;
  }

  var bar = new foo(2);
  console.log('bar.a', bar.a); // bar.a 2
})();

(() => {
  function foo(a) {
    this.a = a;
  }
  var obj1 = { foo };
  var obj2 = {};

  obj1.foo(2); // 隐式绑定
  console.log('隐式绑定', obj1.a); // 隐式绑定 2

  obj1.foo.call(obj2, 3); // 显示绑定
  console.log('显示绑定', obj2.a); // 显示绑定 3

  var bar = new obj1.foo(4); // new 绑定
  console.log(obj1.a); // 2
  console.log('new绑定', bar.a); // new 绑定4
})();

(() => {
  function foo(a) {
    this.a = a;
  }
  var obj1 = {};
  var bar = foo.bind(obj1);
  bar(2);
  console.log('显式绑定', obj1.a); // 显式绑定 2

  var baz = new bar(3);
  console.log(obj1.a);
  console.log('new 绑定', baz.a); // new 绑定 3
})();

(() => {
  function foo(p1, p2) {
    this.val = p1 + p2;
  }

  var bar = foo.bind(null, 'p1');
  var baz = new bar('p2');

  console.log(baz.val); // p1p2
})();

(() => {
  function foo(a, b) {
    console.log(`a:${a},b:${b}`);
  }

  // 纯空  null 会有protoype对象
  var empty = Object.create(null);
  foo.apply(empty, [2, 3]);
})();

(() => {
  function foo() {
    console.log(this.a);
  }
  var a = 2;
  var o = { a: 3, foo };
  var p = { a: 4 };

  o.foo(); // 3
  (p.foo = o.foo)();
})();

(() => {
  if (!Function.prototype.softBind) {
    Function.prototype.softBind = function(obj) {
      // Function.prototype.softBind = (obj, ...args) => {
      var fn = this;
      curried = [].slice.call(arguments, 1);
      // curried = [].slice.call(args, 1);
      var bound = function() {
        return fn.apply(!this || this === (window || global) ? obj : this, [
          ...curried,
          ...arguments
        ]);
      };
      bound.prototype = Object.create(fn.prototype);
      return bound;
    };
  }

  function foo() {
    console.log(`name:${this.name}`);
  }

  var obj = { name: 'obj' },
    obj2 = { name: 'obj2' },
    obj3 = { name: 'obj3' },
    fooOBJ = foo.softBind(obj);

  fooOBJ(); // name:obj

  obj2.foo = foo.softBind(obj);
  obj2.foo(); // name obj2

  fooOBJ.call(obj3); // name obj3
})();

(() => {
  function foo() {
    return a => {
      console.log('箭头函数', this.a);
    };
  }

  var obj1 = { a: 2 },
    obj2 = { a: 3 },
    bar = foo.call(obj1);

  bar.call(obj2); // 箭头函数 2
})();

(() => {
  function foo() {
    var self = this;
    return function(a) {
      console.log('模拟箭头函数', self.a);
    };
  }

  var obj1 = { a: 2 },
    obj2 = { a: 3 },
    bar = foo.call(obj1);

  bar.call(obj2); // 模拟箭头函数 2
})();

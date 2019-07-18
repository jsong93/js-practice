// 原型链 prototype
(() => {
  var anotherObject = { a: 2 };

  var myObject = Object.create(anotherObject);
  console.log(myObject.a); // 2
})();

(() => {
  var anotherObject = { a: 2 };

  var myObject = Object.create(anotherObject);

  for (const key in myObject) {
    // if (myObject.hasOwnProperty(key)) {
    console.log('fond:' + key);
    console.log(myObject.valueOf());
    // }
  }
  console.log('a' in myObject);
})();

(() => {
  var myObject = { a: 2 };
  myObject.a = 3;
  console.log(myObject); // {a: 3}
})();

(() => {
  var anotherObject = { a: 2 };
  var myObject = Object.create(anotherObject);
  myObject.b = 3;
  console.log(myObject); // {b: 3}
})();

(() => {
  var anotherObject = { a: 2 };
  var myObject = Object.create(anotherObject);
  Object.defineProperty(myObject, 'a', { value: 3, writable: true });
  console.log(myObject); // {a: 3}
  console.log(anotherObject); // {a: 2}
  myObject.a = 4;
  console.log(anotherObject); // {a: 2}
  console.log(myObject); // {a: 4}
})();

(() => {
  // 如果在prototype链上存在a的普通数据类型访问属性 并且没有被标记为只读（writable：false）
  // 那就会直接在myObject中添加一个名a的新属性，他是屏蔽属性。
  var anotherObject = { a: 2 };

  var myObject = Object.create(anotherObject);
  console.log(myObject.a); // 2

  myObject.a = 3;
  console.log(myObject.a); // 3
  console.log(myObject); // {a: 3}
  console.log(anotherObject); // {a: 2}
})();

(() => {
  // 如果在prototype链上层存在a,但是它被标记为只读（writable：false），
  // 那么无法修改稿已有属性或者在myObject上创建屏蔽属性。如果在严格模式下，报错。
  // 否则，这条赋值语句会被忽略，不会发生平板
  // 'use strict'; // Uncaught TypeError: Cannot assign to read only property 'a' of object '#<Object>'
  var anotherObject = {};
  Object.defineProperties(anotherObject, {
    a: {
      writable: false,
      value: 2
    }
  });

  var myObject = Object.create(anotherObject);
  console.log(myObject.a); // 2
  myObject.a = 3;
  console.log(myObject.a); // 2
  console.log(myObject); // {}
  console.log(anotherObject); // {a: 2}

  Object.defineProperty(myObject, 'a', { value: 3, writable: true });
  console.log(myObject); // {a: 3}
  myObject.a = 4;
  console.log(myObject); // {a: 4}
})();

(() => {
  // 如果在prototype 链上层存a 并且他是 一个setter。那就一定会调用这个setter。
  // a不会被田间道myObject，也不会重新定义foo
  var anotherObject = {
    get a() {
      return this._a_;
    },
    set a(val) {
      this._a_ = val;
    }
  };

  var myObject = Object.create(anotherObject);
  console.log('prototype3', myObject); // {}
  myObject.a = 3;
  console.log('prototype3', myObject); // {_a_: 3}
})();

(() => {
  var anotherObject = { a: 2 };
  var myObject = Object.create(anotherObject);

  console.log(anotherObject.a); // 2
  console.log(myObject.a); // 2

  // 相当于 myObject = myObject.a + 1
  myObject.a++;

  console.log(anotherObject.a); // 2
  console.log(myObject.a); // 3
})();

(() => {
  function Foo() {}
  var a = new Foo();
  console.log('typeof Foo', typeof Foo);
  console.log('Foo', Foo);
  console.log('Foo.prototype', Foo.prototype);
  console.log('Foo.prototype.constructor', Foo.prototype.constructor);
  console.log(
    'Foo.prototype.constructor===Foo',
    Foo.prototype.constructor === Foo
  );
  console.log('a.contructor', a.constructor);
  console.log('a.contructor === Foo', a.constructor === Foo);
  console.log('Foo.__proto', Foo.__proto__);
  console.log('Foo.__proto__.__proto__', Foo.__proto__.__proto__);
  console.log('typeof a', typeof a);
  console.log('a', a);
  console.log('a.prototype', a.prototype);
  console.log('a.__proto__', a.__proto__);
  console.log('Object.getPrototypeOf(Foo)', Object.getPrototypeOf(Foo));
  console.log(
    'Object.getPrototypeOf(a) === Foo.prototype',
    Object.getPrototypeOf(a) === Foo.prototype
  );
})();
console.log('-------------构造函数---------------');
(() => {
  function Foo(name) {
    this.name = name;
  }

  Foo.prototype.myName = function() {
    return this.name;
  };

  var a = new Foo('a');

  console.log(a);
  console.log(a.myName()); // a
  console.log(a.constructor === Foo); // true
  console.log(a.prototype); // undefined
  console.log(Object.getPrototypeOf(a));
  console.log(Foo.constructor === Function);
  console.log(Object.getPrototypeOf(Foo) instanceof Object);
  console.log(Foo.prototype.constructor === Foo); // true
})();

(() => {
  function Foo() {}
  Foo.prototype = {};
  var a = new Foo();
  console.log(a.constructor === Foo); // false
  console.log(a.constructor === Object); // true
})();

// todo 对象引用
(() => {
  var a = {
      a: function() {
        console.log('a');
      },
      o: {
        a: function() {
          console.log('oa');
        }
      }
    },
    b = {};
  a.o.a();
  b.a = a.a;
  b.o = a.o;

  b.a();
  b.a = function() {
    console.log('b');
  };
  b.a();
  a.a();

  b.o.a = function() {
    console.log('ob');
  };

  b.o.a();
  a.o.a();

  var c = a,
    d = {
      a: function() {
        console.log('d');
      }
    };
  c.a = function() {
    console.log('c');
  };

  c.a();
  a.a();

  c = d;
  c.a();
  a.a();
})();

console.log('---------------继承-------------');
(() => {
  function Fun(name) {
    this.name = name;
  }

  Fun.prototype.myName = function() {
    return this.name;
  };

  function Bar(name, lable) {
    Fun.call(this, name);
    this.lable = lable;
  }

  var c = new Fun('js');
  console.log(c.myName()); // js

  // Bar.prototype = Fun.prototype;
  // Bar.prototype = new Fun();
  Bar.prototype = Object.create(Fun.prototype);
  // Object.setPrototypeOf(Bar.prototype, Fun.prototype);
  Bar.prototype.myName = function() {
    return this.name + 'jsong';
  };

  // console.log('bar', Bar.prototype);
  // console.log('bar', Bar.prototype.constructor);

  var a = new Bar('jsong');
  console.log(a.myName()); // jsongjsong

  var b = new Fun('js');
  console.log(b.myName()); // js
})();

console.log('-----------对象关联-------------');
(() => {
  var a = { a: 2 },
    b = Object.create(a);

  console.log(b);
  console.log(b.a);
  console.log(Object.getPrototypeOf(b) === a);
  console.log(b.constructor instanceof Object);
})();

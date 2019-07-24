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

console.log('-----------相互委托--------------');
(() => {
  'use strict';
  var a = {};
  a = Object.create({});
  var b = Object.create(a);
  console.log(a.a);
})();

(() => {
  var Foo = {};
  var a1 = Object.create(Foo);

  console.log(a1);

  Object.defineProperty(Foo, 'constructor', {
    enumerable: false,
    value: function Gotcha() {}
  });

  console.log(a1);
})();

(() => {
  var Foo = {
      init: function(who) {
        this.me = who;
      },
      identify: function() {
        return `I am ${this.me}`;
      }
    },
    Bar = Object.create(Foo);
  Bar.speak = function() {
    console.log(this.identify());
  };

  var b1 = Object.create(Bar);
  b1.init('jsong');
  b1.speak();
})();

(() => {
  var a = {
    errors: [],
    // es6 简洁方法声明 可以省略function
    getUser() {},
    getPassword() {}
  };
})();

(() => {
  var Foo = {
    bar: function(x) {
      if (x < 10) {
        return Foo.bar(x * 2);
      }
    }
  };

  console.log(Foo.bar(1));
})();

(() => {
  var Foo = {},
    Bar = Object.create(Foo);

  console.log(Foo.isPrototypeOf(Bar));
  // console.log(Bar instanceof Foo);
  var Baz = function() {};
  var a = new Baz();
  console.log(a instanceof Baz);
  console.log(Baz.isPrototypeOf(a));
})();

(() => {
  class a extends Array {}
})();

(() => {
  class c {
    constructor() {
      this.num = Math.random();
    }

    rand() {
      console.log(`random: ${this.num}`);
    }
  }

  console.log(c);
  var c1 = new c();
  console.log(c1);
  c1.rand();

  c.prototype.rand = function() {
    console.log(`random: ${Math.round(this.num * 100)}`);
  };

  c1.rand();
})();

console.log('--------------class-----------------');
(() => {
  var a = {
    foo() {
      console.log('a');
    },
    bar() {
      console.log('bar');
    }
  };

  var b = {
    foo() {
      console.log('b');
    }
  };

  Object.setPrototypeOf(b, a);
  b.foo();
  b.bar();
})();

(() => {
  class a {
    foo(x) {
      console.log(x);
    }
  }
})();

console.log('-------------class--------------');
(() => {
  class A {
    constructor(name) {
      this.name = name;
    }

    sayHello() {
      console.log(`hello ${this.name}`);
    }

    saySeeYou() {
      console.log('see you');
    }
  }

  class B extends A {
    constructor(name, age) {
      super(name);
      this.age = age;
    }

    sayHello() {
      super.sayHello();
      console.log(`age ${this.age}`);
    }
  }

  var a = new A('jsong');
  a.sayHello(); // hello jsong
  var b = new B('jsong', '11');
  b.sayHello(); // hello jsong
  // age 11

  b.saySeeYou(); // see you
})();

(() => {
  function A(name) {
    this.name = name;
  }
  A.prototype.sayHello = function() {
    console.log(`hello ${this.name}`);
  };
  A.prototype.saySeeYou = function() {
    console.log('see you');
  };

  function B(name, age) {
    A.call(this, name);
    this.age = age;
  }
  B.prototype = Object.create(A.prototype);
  B.prototype.sayHello = function() {
    A.prototype.sayHello.call(this);
    console.log(`age ${this.age}`);
  };

  var a = new A('jsong');
  a.sayHello(); // hello jsong
  var b = new B('jsong', '11');
  b.sayHello(); // hello jsong
  // age 11

  b.saySeeYou(); // see you
})();

(() => {
  class C {
    sayHello() {
      console.log('hello world');
    }
  }

  var c1 = new C();
  c1.sayHello(); // hello world

  C.prototype.sayHello = function() {
    console.log('see you world');
  };

  var c2 = new C();
  c2.sayHello(); // see you world

  c1.sayHello(); // see you world
})();

(() => {
  class C {
    constructor() {
      C.prototype.count++;
      console.log(`hello ${this.count}`);
    }
  }

  C.prototype.count = 0;

  var c1 = new C(); // hello 1
  console.log(c1.count); // 1
  var c2 = new C(); // hello 2
  console.log(c1.count); // 2
  console.log(c2.count); // 2
})();

(() => {
  class A {
    foo() {
      console.log('A');
    }
  }

  var B = {
    foo() {
      console.log('B');
    }
  };

  var C = {
    foo: A.prototype.foo
  };

  Object.setPrototypeOf(C, B);

  C.foo(); // A

  var D = Object.create(B);
  D.foo = A.prototype.foo.toMethod(D, 'foo');

  D.foo();
})();

(() => {
  var base = {
    foo() {
      console.log('base');
    }
  };

  var obj = Object.create(base);
  obj.foo();
  obj.foo = function() {
    // super.foo();
  };
  obj.foo();
})();

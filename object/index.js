// 20190701-19:30 jsong 对象
(() => {
  var str = 'I am a string';
  console.log('typeof str', typeof str); // typeof str string
  console.log('is str instanceof String', str instanceof String); // is str instanceof String false

  var strObj = new String('I am a String');
  console.log('typeof strObj', typeof strObj); // typeof strObj object
  console.log('is strObj instanceof String', strObj instanceof String); // is strObj instanceof String true

  console.log(Object.prototype.toString.call(strObj)); // [object String]
  console.log(strObj.toString()); // I am String;
})();

(() => {
  var myObject = { a: 2 };
  var idx;
  idx = 'a';

  console.log(myObject[idx]); // 2
})();

(() => {
  var obj = {};

  obj[true] = 'foo';
  obj[3] = 'bar';
  obj[obj] = 'baz';

  console.log(obj['true']);
  console.log(obj['3']);
  console.log(obj.toString()); // [object Object]
  console.log(obj['[object Object]']); // obj.toString()的值为[object Object]
})();

(() => {
  var pre = 'foo';
  var obj = {},
    obj2 = { [pre + 'bar']: 'jsong' };
  obj[pre + 'bar'] = 'hello';
  console.log(obj[pre + 'bar']); // hello
  console.log(obj2[pre + 'bar']); // jsong
})();

(() => {
  var obj = {
    a: 2,
    foo: function() {
      console.log(this.a);
    }
  };

  var foo = obj.foo;
  foo();
  obj.foo();
})();

(() => {
  var arry = ['foo'];
  console.log('arry.length', arry.length); // arry.length 1
  arry.bar = 'bar';
  console.log('arry.bar', arry.bar); // arry.bar bar
  arry['2'] = 'jsong';
  console.log('arry.length', arry.length); // arry.length 3
  console.log(arry); // ["foo", empty, "jsong"]
  console.log(arry[1]); // undefined
})();

(() => {
  function anotherFucntion() {}
  var anotherObject = {
    c: true
  };

  var anothterArray = [];

  var myObject = {
    a: 2,
    b: anotherObject,
    c: anothterArray,
    d: anotherFucntion
  };
  //  anothterArray.push(anotherObject, myObject);
  // 深拷贝
  var newObj = JSON.parse(JSON.stringify(myObject));
  console.log(
    'newObj.a===myObject.a',
    newObj.a === myObject.a,
    'newObj.b===myObject.b',
    newObj.b === myObject.b,
    'newObj.c===myObject.c',
    newObj.c === myObject.c
  ); // newObj.a===myObject.a true newObj.b===myObject.b false newObj.c===myObject.c false

  var newObj2 = Object.assign({}, myObject);
  console.log(
    'newObj2.a===myObject.a',
    newObj2.a === myObject.a,
    'newObj2.b===myObject.b',
    newObj2.b === myObject.b,
    'newObj2.c===myObject.c',
    newObj2.c === myObject.c
  ); // newObj2.a===myObject.a true newObj2.b===myObject.b true newObj2.c===myObject.c true
  console.log(newObj);
})();

(() => {
  'use strict';
  var myObject = {
    a: 2
  };

  console.log(Object.getOwnPropertyDescriptor(myObject, 'a')); // {value: 2, writable: true, enumerable: true, configurable: true}
  console.log(Object.getOwnPropertyDescriptors(myObject));

  Object.defineProperty(myObject, 'b', {
    value: 3,
    writable: false,
    configurable: true,
    enumerable: true
  });

  console.log(myObject.b); // 3
  try {
    myObject.b = 5; // use strict 报错 Uncaught TypeError: Cannot assign to read only property 'b' of object '#<Object>
  } catch (e) {
    console.error(e);
  }
})();

(() => {
  var myObject = { a: 2 };

  console.log('a', myObject.a); // a 2
  delete myObject.a;
  console.log('a', myObject.a); // a undefined

  Object.defineProperty(myObject, 'a', {
    value: 4,
    writable: true,
    configurable: false,
    enumerable: true
  });

  console.log('a', myObject.a); // a 4
  delete myObject.a;
  console.log('a', myObject.a); // a 4

  Object.defineProperty(myObject, 'b', {
    value: 4,
    writable: true,
    configurable: false,
    enumerable: true
  });

  myObject.b = 5;
  console.log('b', myObject.b);
  try {
    // 禁止修改
    Object.defineProperty(myObject, 'b', {
      value: 4,
      writable: true,
      configurable: true,
      enumerable: true
    });
  } catch (e) {
    console.error(e); // Uncaught TypeError: Cannot redefine property: b
  }
})();

(() => {
  var myObject = { a: 2, b: 3 };
  for (let key in myObject) {
    console.log(key); // a  b
  }
  Object.defineProperty(myObject, 'a', {
    value: 2,
    writable: true,
    configurable: true,
    enumerable: false
  });
  console.log(myObject.a); // 2
  console.log('a' in myObject); // true
  console.log(myObject.hasOwnProperty('a')); // true
  console.log(myObject.propertyIsEnumerable('a')); // false
  console.log(myObject.propertyIsEnumerable('b')); // true

  console.log(Object.keys(myObject)); // ["b"]
  console.log(Object.getOwnPropertyNames(myObject)); // ["a", "b"]
  for (let key in myObject) {
    console.log(key); // b
  }
})();

(() => {
  // 'use strict';
  var myObject = { a: 2 };

  Object.preventExtensions(myObject);

  myObject.b = 3; // use stric 严格模式下 index.js:193 Uncaught TypeError: Cannot add property b, object is not extensible
  console.log(myObject.b); // undefined
})();

(() => {
  // 'use strict';
  var myObject = { a: 2 };

  Object.seal(myObject);

  delete myObject.a; // use stric 严格模式下 index.js:203 Uncaught TypeError: Cannot delete property 'a' of #<Object>
  console.log(myObject.a); // 2
})();

(() => {
  // 'use strict';
  var myObject = { a: 2 };

  Object.freeze(myObject);

  myObject.a = 3; // use strict 严格模式下 index.js:213 Uncaught TypeError: Cannot assign to read only property 'a' of object '#<Object>'
  console.log(myObject.a); // 2
})();

(() => {
  // 'use strict';
  var myObject = { a: 2, c: undefined };
  console.log(myObject.b); // undefined
  console.log(myObject.c); // undefined
})();

(() => {
  var myObject = {
    get a() {
      return this._a_;
    },
    set a(val) {
      this._a_ = val;
    }
  };

  Object.defineProperty(myObject, 'b', {
    get: function() {
      return this.a;
    }
  });
  myObject.a = 2;
  console.log('a', myObject.a); // a 2
  console.log('b', myObject.b); // b 2
})();

(() => {
  var myObject = {};
  Object.defineProperty(myObject, 'a', {
    // value: 2,
    // writable: false,
    get: function() {
      return this._a_;
    },
    set: function(val) {
      this._a_ = val;
    }
  });

  myObject.a = 3;
  console.log(myObject.a);
})();

(() => {
  var myObject = {
    // a: 2,
    get a() {
      return this._a_;
    },
    set a(val) {
      this._a_ = val;
    }
  };
  // Object.defineProperty(myObject, 'a', {
  //   writable: false
  // });

  myObject.a = 3;
  console.log('a', myObject.a);
  console.log('a' in myObject); // 是否在对象  及其  原型中
  console.log('_a_' in myObject);
  console.log(myObject.hasOwnProperty('a')); // 只检查本身
})();

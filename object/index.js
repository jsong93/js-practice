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

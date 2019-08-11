/*
 * @Description: 叫你一声你敢答应吗
 * @Author: jsong
 * @Date: 2019-08-06 20:17:22
 * @LastEditTime: 2019-08-11 15:21:52
 * @LastEditors: jsong
 */
// function doSomething() {
//   if (true) {
//     return void setTimeout(doSomething, 100);
//   }

//   var result = 1;
//   return result;
// }

// if (doSomething()) {
// }

var a = 2 / 'foo';
console.log(typeof a, a); // number NaN
console.log(a == NaN); // false
console.log(a === NaN); // false
console.log(isNaN(a)); // true
console.log(isNaN('foo')); // true

console.log(Number.isNaN(a)); // true
console.log(Number.isNaN('foo')); // false

if (!Number.isNaN()) {
  Number.isNaN = function(n) {
    return typeof n === 'number' && window.isNaN(n);
  };
}

if (!Number.isNaN()) {
  Number.isNaN = function(n) {
    return n !== n;
  };
}

console.log(Number.isNaN(a)); // true
console.log(Number.isNaN('foo')); // false

console.log(1 / 0); // infinity

var a = Number.MAX_VALUE;
console.log(a + a); // infinity
console.log(a + Math.pow(2, 970)); // infinity 向上取整 无穷
console.log(a + Math.pow(2, 970) - Math.pow(2, 970)); // infinity 无穷后 怎么都是无穷
console.log(a + Math.pow(2, 969)); // 1.7976931348623157e+308 向下取整
console.log(Infinity / Infinity); // NaN

console.log(1 / Infinity); // 0
console.log(-1 / Infinity); // -0

console.log(Infinity / Infinity); // NaN

function isNegZero(n) {
  n = Number(n);
  return n === 0 && 1 / n === -Infinity;
}

console.log(isNegZero(-0)); // true
console.log(isNegZero(0)); // false

// 正无穷 ！= 负无穷
console.log(1 / 0 === 1 / -0); // false
// 正无穷===正无穷
console.log(1 / 0 === 3 / 0); // true

if (!Object.is) {
  Object.is = function(v1, v2) {
    // 判断是否是 -0
    if (v1 === 0 && v2 === 0) {
      return 1 / v1 === 1 / v2;
    }
    // 判断是否是NaN
    if (v1 !== v1) {
      return v2 !== v2;
    }
    // 其他情况
    return v1 === v2;
  };
}

console.log(Object.is(NaN, NaN)); // true

var a = [1, 2, 3];
var b = a;

b = [4, 5, 6];
console.log(a);
console.log(b);

function foo(x) {
  x.push(4);
  console.log(x); // 1,2,3,4

  x = [4, 5, 6];
  x.push(7);
  console.log(x); // 4,5,6,7
}

foo(a);
console.log(a); // 1,2,3,4

function bar(x) {
  x = x + 1;
}

var x = 2;
bar(x);
console.log(x);

var y = new Number(x);
bar(y);
console.log(y);

console.log(new Object(x));

if (!Number.EPSILON) {
  Number.EPSILON = Math.pow(2, -52);
}

function numberIsEqual(n1, n2) {
  return Math.abs(n1 - n2) < Number.EPSILON;
}

numberIsEqual(0.1 + 0.2, 0.3);

console.log(Number.isInteger(3)); // true
console.log(Number.isInteger(-3)); // true
console.log(Number.isInteger(3.0)); // true
console.log(Number.isInteger(3.1)); // false
if (!Number.isInteger) {
  Number.isInteger = function(num) {
    return typeof num === 'number' && num % 1 == 0;
  };
}

if (!Number.isSafeInteger) {
  Number.isSafeInteger = function(num) {
    return Number.isInteger(num) && Math.abs(num) <= Number.MAX_SAFE_INTEGER;
  };
}

(() => {
  var a = 2,
    b = a;
  b++;
  console.log(a); // 2
  console.log(b); // 3

  var c = [1, 2, 3],
    d = c;
  d.push(4);
  console.log(c); // [1, 2, 3, 4]
  console.log(d); // [1, 2, 3, 4]
})();

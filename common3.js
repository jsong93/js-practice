// case1
// module.exports = { a: 1 };
// exports.b = 2;
// // {a:1}
// console.log(module.exports);

// case2
module.exports.a = 1;
exports.b = 2;
// {a:1,b:2}
console.log(module.exports);

// case3
// const a = 1;
// module.exports = { a };
// exports.b = 2;
// // {a:1}
// console.log(module.exports);

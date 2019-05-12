function currency(c) {
  this.c = c;
}

currency.prototype.roundTow = amount => {
  return amount;
};

function roundTow(amount) {
  return amount;
}

// nan 全局调用roundTow this为global
// currency.prototype.a = a => roundTow(a * this.c);
// currency.prototype.b = a => roundTow(a / this.c);

// 为啥这个写法不行呢
// currency.prototype.a = a => roundTow(a * this.c);
currency.prototype.a = function(a) {
  return roundTow(a * this.c);
  // 也可以
  //   return this.roundTow(a * this.c);
};
currency.prototype.b = a => roundTow(a / this.c);

module.exports = currency;

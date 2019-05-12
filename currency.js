const canadianDollar = 0.91;

function roundTow(amount) {
  return amount;
}

exports.a = a => roundTow(a * canadianDollar);
exports.b = b => roundTow(b / canadianDollar);

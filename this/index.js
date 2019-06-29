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

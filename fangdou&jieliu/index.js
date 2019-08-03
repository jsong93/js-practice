// let count = 0;
// document.querySelector('#divWindow').onmousemove = function(e) {
//   console.log(count++);
// };
// const divWindow = document.querySelector('#divWindow');
// divWindow.addEventListener('mousemove', () => {
//   //   console.log(count++);
//   divWindow.innerHTML = count++;
// });

let count = 0;
const add = document.querySelector('#add');
const addLabel = document.querySelector('#addLable');
add.addEventListener('click', () => {
  addLable.innerHTML = ++count;
});

// 防抖
let count1 = 0;
const add1 = document.querySelector('#add1');
const addLabel1 = document.querySelector('#addLable1');
let timeout;
const add1Click = function() {
  addLabel1.innerHTML = ++count1;
};
// add1.addEventListener('click', () => {
//   if (timeout) {
//     clearTimeout(timeout);
//   }
//   timeout = setTimeout(add2Click, 500);
// });
add1.addEventListener('click', _.debounce(add1Click, 500));

// 节流
let count2 = 0;
const add2 = document.querySelector('#add2');
const addLabel2 = document.querySelector('#addLable2');
const add2Click = function() {
  addLabel2.innerHTML = ++count2;
};
// let beAbleClick = true;
// add2.addEventListener('click', () => {
//   if (!beAbleClick) {
//     return;
//   }
//   setTimeout(() => {
//     add2Click();
//     beAbleClick = true;
//   }, 500);
//   beAbleClick = false;
// });
add2.addEventListener('click', _.throttle(add2Click, 500));

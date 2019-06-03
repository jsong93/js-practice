import _ from 'lodash';
import print from './print';
import './style.css';
import { cube } from './math';
if (process.env.NODE_ENV !== 'production')
  console.log('look like we are in devlopment mode!');
function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console';
  btn.onclick = print;
  element.appendChild(btn);

  const cubeElement = document.createElement('pre');
  cubeElement.innerHTML = ['hello webpack', '5 的立方是 ' + cube(5)].join(
    '\n\n'
  );

  element.appendChild(cubeElement);

  return element;
}

// 当改变print.js时，按钮的console并没有改变
document.body.appendChild(component());

// console.log(module.hot);
// if (module.hot) {
//   console.log(11);
//   // print.js变化后执行这个方法
//   module.hot.accept('./print.js', () => {
//     console.log('accepting the update print module');
//     print();
//   });
// }

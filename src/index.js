import _ from 'lodash';
import print from './print';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console';
  btn.onclick = print;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

console.log(module.hot);
if (module.hot) {
  console.log(11);
  // print.js变化后执行这个方法
  module.hot.accept('./print.js', () => {
    console.log('accepting the update print module');
    print();
  });
}

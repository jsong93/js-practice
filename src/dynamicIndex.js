// import() 调用会在内部用到 promises。如果在旧有版本浏览器中使用 import()，记得使用 一个 polyfill 库（例如 es6-promise 或 promise-polyfill），来 shim Promise。
// function getComponent() {
//   return import(/* webpackChunkName: "lodash" */ 'lodash')
//     .then(_ => {
//       const elemnt = document.createElement('div');
//       element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//       return element;
//     })
//     .catch(error => 'An error occurred while loading the component');
// }

async function getComponent() {
  const element = document.createElement('div');
  // 必须是  /*  */
  // /* webpackChunkName:"lodash" */ 打包的名字
  // 'lodash'  import 的 对象
  const _ = await import(/* webpackChunkName:"lodash" */ 'lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
});

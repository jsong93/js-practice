// 导出变量
export const name = 'jsong';
// 等价于
// const name = 'jsong';
// export { name };

export const sayHello = () => console.log(`hello ${name}`);
// 等价于
// const sayHello = () => console.log(`hello ${name}`);
// export { sayHello };

// 导出函数
export function eat() {
  console.log(`${name} eat`);
}
// 等价于
// function eat() {
//   console.log(`${name} eat`);
// }
// export { eat };
const age = 11;
// 导出对象
export const people = {
  name,
  age,
  hello: () => console.log(`hello ${name}`)
};
// 等价于
// const people = {
//   name,
//   age,
//   hello: () => console.log(`hello ${name}`)
// };
// export { people };
// 导出类
export class jsong {
  sayHello() {
    console.log(`hello ${name}`);
  }
}
// 等价于
// class jsong {
//   sayHello() {
//     console.log(`hello ${name}`);
//   }
// }
// export { jsong };

export default age;
// jsong
console.log(name);

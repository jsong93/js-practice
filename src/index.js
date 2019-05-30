import _ from 'lodash';
import './style.css';
// js 文件可以 不加后缀  其他文件必须加后缀
import Icon from './people.png';
import snow from '../img/snow.jpg';
import data from './data.xml';

function component() {
  var element = document.createElement('div');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // es6 也可以啊
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  console.log(data);

  return element;
}

document.body.appendChild(component());

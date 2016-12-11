var url = require('url');
//https://edumall.vn/courses/tron-bo-kien-thuc-nodejs/lecture/22
var urlInfo = url.parse('https://edumall.vn/courses/tron-bo-kien-thuc-nodejs/lecture/22');
console.log(urlInfo);
var obj = {
  sayHello: 'Hello'
}
console.log(obj['sayHello']);
var arr =[];
arr.push(() =>console.log('Arr1'));
arr.push(() =>console.log('Arr2'));
arr.push(() =>console.log('Arr3'));
arr.push(() =>console.log('Arr4'));
arr.push(() =>console.log('Arr5'));
arr.forEach(item => item());

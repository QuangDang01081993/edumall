var sayHello = require('./hello.js');
var person ={
  firstName: 'Hoa',
  lastName: 'Mai',
  sayHello: function(){
    console.log(`${this.firstName} ${this.lastName}`);
  }
}
person.sayHello();
var keyName = "firstName";
console.log(person[keyName]);
var say = "sayHello";
person[say]();

function User(name, pass){
  this.name = name;
  this.pass = pass;
}
User.prototype.getName = function () {
  return this.name;
};
User.prototype.getPass = function () {
  return this.pass;
};
// scope la pham vi truy cap toi cac bien va function
var util = require('util');
var name = 'Quang';
var message = util.format('Hello, %s', name);
console.log(message);

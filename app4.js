var util = require('util');
function Person(firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.sayHello = function () {
  console.log(`Hello ${this.firstName} ${this.lastName}`);
};
function Student(firstName,lastName,id){
  Person.call(this,firstName,lastName);
  this.id = id;
  this.sayHello =function() {
    console.log(`Hello ${this.firstName} ${this.lastName} id : ${this.id}`);
  }
}

util.inherits(Student,Person);

var sv = new Student('Dang','Quang','1234');
sv.sayHello();

class PersonC {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  showPerson(){
    console.log(`Hello ${this.name} age: ${this.age}`);
  }
  get Name(){
    return this.name;
  }
  set sName(name){
    this.name = name;
  }
}
var Hoa = new PersonC('Hoa',28);
Hoa.showPerson();
console.log(Hoa.Name);
Hoa.sName = 'Quang';
Hoa.showPerson();
var Phuong = new PersonC('Phuong',28);
console.log(Hoa.__proto__);
console.log(Phuong.__proto__);
console.log(Hoa.__proto__ === Phuong.__proto__);

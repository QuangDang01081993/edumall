var person ={
  firstName:'',
  lastName: '',
  getFullName: function(){
    return `${this.firstName} ${this.lastName}`;
  }
}
var Quang = Object.create(person);
Quang.firstName = 'Dang';
Quang.lastName ='Quang';
console.log(Quang.getFullName());

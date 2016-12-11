var obj = {
  name:'Quang Dang',
  age: 23,
  sayHello: function(param1, param2){
    console.log(`Hello ${this.name} tuoi: ${this.age}`);
    console.log('Params: ' , param1, param2);
  }
}
obj.sayHello('Xin chao',2016);
obj.sayHello.call({name: 'Yen Dang',age:21},'Xin chao',2016);
obj.sayHello.apply({name: 'Hao Dang', age:25},['2017','xin chao']);

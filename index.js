// var Emitter = require('./emiter.js');
// var emitter = new Emitter();
// var nameEvent = require('./config').events;
// emitter.on('bad',() => console.log('Mot mon nao do bi diem kem'));
// emitter.on('bad',() => console.log('Mot mon nao do bi diem kem can bao voi phu huynh'));
// var Events=  require('events');
// var events = new Events();
// events.on(nameEvent.BAD_SCORE,() => console.log('Mot mon nao do bi diem kem events'));
// events.on(nameEvent.BAD_SCORE,() => console.log('Mot mon nao do bi diem kem can bao voi phu huynh events'));
// var scores = [10,4];
// for(var s of scores){
//   if(s<5){
//     emitter.emit(nameEvent.BAD_SCORE);
//     events.emit(nameEvent.BAD_SCORE);
//   }
// }
// var _= require('lodash');
// var arr = [1];
// var other = _.concat(arr,1,2,3,4,[5]);
// console.log(other);
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use('/assets',express.static(__dirname +'/public'));
// app.use('/',(req,res,next) =>{
//   console.log('Request URL: ', req.url);
//   req.requestTime = new Date();
//   next();
// });
app.use(cookieParser());
app.listen(3000,()=>{
  console.log('sever is runing');
});
app.get('/',(req,res) => {
  console.log(req.cookies('hello','123'));
  res.send(`
    <h1> hello work  </h2>
    `);
});
app.get('/user/:id',(req,res) =>{
  var {id} = req.params;
  res.send(`user: ${id}`);
});

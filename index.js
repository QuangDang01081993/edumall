var Emitter = require('./emiter.js');
var emitter = new Emitter();
var nameEvent = require('./config').events;
emitter.on('bad',() => console.log('Mot mon nao do bi diem kem'));
emitter.on('bad',() => console.log('Mot mon nao do bi diem kem can bao voi phu huynh'));
var Events=  require('events');
var events = new Events();
events.on(nameEvent.BAD_SCORE,() => console.log('Mot mon nao do bi diem kem events'));
events.on(nameEvent.BAD_SCORE,() => console.log('Mot mon nao do bi diem kem can bao voi phu huynh events'));
var scores = [10,4];
for(var s of scores){
  if(s<5){
    emitter.emit(nameEvent.BAD_SCORE);
    events.emit(nameEvent.BAD_SCORE);
  }
}

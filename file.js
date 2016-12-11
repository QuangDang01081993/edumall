var fs = require('fs');
var content = fs.readFileSync(__dirname + '/hello.txt','utf8');
console.log(content);
var content2 = fs.readFile('./hello.txt',(err,data) =>{
  if(err){
    return console.log(err);
  }
  console.log(data.toString());
});

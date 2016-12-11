var fs = require('fs');
var zlib = require('zlib');
// var content = fs.readFileSync(__dirname + '/hello.txt','utf8');
// console.log(content);
// var content2 = fs.readFile('./hello.txt',(err,data) =>{
//   if(err){
//     return console.log(err);
//   }
//   console.log(data.toString());
// });
//

// var readable = fs.createReadStream(__dirname + '/hello.txt',{
//   encoding:'utf8',
//   highWaterMark: 16*1024
// });
//
// var writeAble = fs.createWriteStream(__dirname +'/hello2.txt');
// var gzip = zlib.createGzip();
// readable.on("data",function(chunk) {
//   console.log(chunk.toString());
//   console.log(chunk.length);
//   writeAble.write(chunk);
// });
//copy
// readable.pipe(fs.createWriteStream(__dirname +'/hello3.txt'));
//compress
// readable.pipe(gzip).pipe(fs.createWriteStream(__dirname +'/hello4.gz'));


var red = fs.createReadStream(__dirname+'/Dieu-Anh-Biet.mp3');
red.on('data', chunk =>{
  console.log(chunk);
});
red.pipe(fs.createWriteStream(__dirname+'/DAB.mp3'));

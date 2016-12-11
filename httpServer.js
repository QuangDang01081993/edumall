var http = require('http');
var fs = require('fs');
http.createServer((req,res) =>{
  if(req.url === '/' || req.url==='/1.html'){
    fs.createReadStream(__dirname+'/1.html').pipe(res);
  }else if(req.url ==='/api'){
    res.writeHead(200,{'Content-Type':'application/json'});
    var obj ={
      firstName: 'Quang',
      lastName:'Dang'
    }

    res.end(JSON.stringify(obj));
  }else{
    res.writeHead(404);
    res.end('not found');
  }
}).listen(3000,function(){
  console.log('sever listening on: http://localhost:3000');
});

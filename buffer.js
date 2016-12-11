var buf = new Buffer('Xin chao','utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toString('ascii'));
console.log(buf.toJSON());
buf.write('Quang');
console.log(buf.toString());

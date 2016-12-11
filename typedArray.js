//1 bite = 8 bits
var buffer =new ArrayBuffer(8);
var view = new Int32Array(buffer);
view[0] =5;
view[2] =10;

console.log(view);

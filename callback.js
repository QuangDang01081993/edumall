function showCB(cb) {
  var user ={
    name: 'Quang Dang'
  }
  cb(user.name);
}

showCB((name)=> console.log('Read done callbakc ' + name));
showCB((name)=> console.log('Read done callbakc 1 ' +name));
showCB((name)=> console.log('Read done callbakc 2 ' +name));
showCB((name)=> console.log('Read done callbakc 3 '+ name ));

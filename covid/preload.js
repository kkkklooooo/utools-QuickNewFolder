
const fs = require('fs')
const ele= require('electron')
var code1,type1,payload1;
window.readConfig = function () {
  return code1;
}	
window.createFolder=function (path) {
  fs.mkdir(path, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Folder created successfully');
    return;
  });
}
window.moveFile=function (current,target){
  console.log(target);
  fs.rename(current,target,(err) => {
    if (err) throw err;
    console.log('Folder moved successfully');
    return;
  });
}

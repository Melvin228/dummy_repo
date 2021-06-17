const path=require('path');

console.log(path.sep)

//join

const filePath= path.join('/content','subfolder' ,'test.txt')
console.log(filePath)

const base= path.basename(filePath)
console.log(base)

//absolute path
const absolute= path.resolve(__dirname,'intro.js');
console.log(absolute)

var pathObj=path.parse(__filename);
console.log(pathObj);
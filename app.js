// const Logger=require('./logger');
// const logger=new Logger();

// // Register a listener
// logger.on('messageLogged',(arg) => {
//     console.log('Listener called',arg);
// })

// logger.log("message");


//https://www.youtube.com/watch?v=Oe421EPjeBE

//Time stopped:1:1:34:29 (http intro)

//local dependency -npm i <packageName>

//global dependency -use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file (store important info about project/package)
//manual approach (create package.json in the root , create properties.etc)
//npm init ( step by step,press enter to skip)
//npm init -y (everything default)

const _= require('lodash')

const items=[1,[2, [3, [4]]]]
const newItems= _.flattenDeep(items);
console.log(newItems)


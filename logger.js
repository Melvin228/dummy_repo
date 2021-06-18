
const EventEmitter=require('events');//class


class Logger extends EventEmitter{
    log(message){
        //send an HTTP request
        console.log(message);
        this.emit('messageLogged',{id:1,url:'http://'});
    }
}


module.exports=Logger;
//Raise an event

// const Logger=require('./logger');
// const logger=new Logger();

// // Register a listener
// logger.on('messageLogged',(arg) => {
//     console.log('Listener called',arg);
// })

// logger.log("message");



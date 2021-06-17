const os=require('os');

var totalMemory=os.totalmem;
var freeMemory=os.freemem;

//info about current user
const user=os.userInfo()
console.log(user)

//method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`)

//os modules
const currentOs={
    name:os.type(),
    relase:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOs)

console.log(`Total Memory:${totalMemory}` );
console.log(`Free memory: ${freeMemory}` );

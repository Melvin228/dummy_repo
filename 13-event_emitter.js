
const customEmitter = new EventEmitter()


customEmitter.on('response',(name,id)=>{
    console.log(`data received user ${name} with id: ${id}`)
})
customEmitter.on('response',()=>{
    console.log(`some other logic here`)
})

customEmitter.emit('response','john',34)


//http
const http=require('http');

const server=http.createServer()
//emit request event
//subcribe to it/listen for it
server.on('request', (req,res)=>{
    res.end("Welcome")
})

server.listen(5000)
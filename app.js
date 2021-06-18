const {createReadStream}=require('fs')

const stream = createReadStream('./content/first.txt' , {
    highWaterMark:90000,
    encoding:'utf-8'})

stream.on('data',(result)=>{
    console.log(result)
})

stream.on('error', (err)=>{
    console.log(err)
})

//default 64 kb
//last buffer -remainder
//highWaterMark - control size









//https://www.youtube.com/watch?v=Oe421EPjeBE

//Time stopped:1:3:00:50 (Async pattern -refactor to async)


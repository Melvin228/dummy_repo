const http = require ('http')

const server= http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Home page")

    }
    if(req.url === '/about'){
        //BLOCKING CODE!!!
        for(let i =0; i<1000;i++){
            for(let j =0; j<1000;j++){
                console.log(`${i} ${j}`)
        }
    }
    }

})

server.listen(5000,()=>{
    console.log("server listening on port 5000...")
})



// Promise function
// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile('./content/first.txt','utf-8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data)
//             }
//         })        
//     })
// }


// getText('./content.first.txt')
//     .then(result=>console.log(result))
//     .catch((err)=>console.log(err))




//async await

const { readFile,writeFile}= require('fs').promises
// const util= require ('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async ()=>{
    try{
        const first = await readFile('./content/first.txt','utf-8');
        const second = await readFile('./content/second.txt','utf-8');
        await writeFile('./content/write-file.txt',
        `THIS IS AWESOME : ${first} ${second}`,
        {flag:'a'}
        )
        console.log(first,second)
    }catch(err){
        console.log("Error:" + err)
    }
}

start()
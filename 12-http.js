const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("Welcome to our home page \n")
        res.write("Welcome to the realest channel on youtube")  
    }
    if(req.url === '/about'){
        res.end("Here is our short description")
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back home </a>
    `)    
     
})

server.listen(5000)

// const express=require('express');

// const app=express();

// app.get('/',async(req,res)=>{
//     res.send("hello world");
// })

// console.log('Listening on port 3000....');

//const amont = 20
//if(amont<10){
   /// console.log('its a small value')
//}

//const { request } = require("express")

//else{
   // console.log('is a large number')
//}
//console.log ('iam all is my first node!!!!')

//setInterval(()=>{
///  console.log('hello world')
//} ,1000)
//const req = require('express/lib/request')
//const res = require('express/lib/response')
const http= require ('http')

const server =http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome my home page')
    }
    if(req.url ==='/about'){
        res.end('hello there ,how are you')

    }
    res.end(`
    <h1>opps!!!<h1>
    <a href ='/'>back home page </a>
    `)
   
})
server.listen(5000)


const os = require('os')

const user = os.userInfo()
console.log(user);
   
 // meyhod returns the system uptime in second

console.log(`system uptime is : ${os.uptime()} seconds`)
const currentos = {
    name: os.type(),
    release:os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentos);
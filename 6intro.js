const http = require('http')

const server = http.createServer((req,res) =>  {
   if(req.url ==='/'){
    res.end('home page')
   }
    if(req.url ==='/about'){
    res.end('about page')
   }
    if(req.url ==='/error'){
    res.end('error page')
   }
}


)

server.listen(5000)
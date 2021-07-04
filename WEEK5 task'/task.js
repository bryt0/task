const http = require('http');
const fs = require('fs');
const hostname =  '127.0.0.1'
const port = 1000

const server = http.createServer((req, res) => {
    console.log('request was made' + req.url);
    if(req.url === '/' || req.url === '/home'){
        res.writeHead(200, {'content-type': 'text/html'})
        fs.createReadStream (__dirname + '/home.html').pipe(res);
        
    } else if (req.url === '/about' || req.url === '/about-us'){
        res.writeHead(200, {'content-type': 'text/html'})
        fs.createReadStream (__dirname + '/about.html').pipe(res);

    } else if (req.url === '/contact'){
        res.writeHead(200, {'content-type': 'text/html'})
        fs.createReadStream (__dirname + '/contact.html').pipe(res);
    
    }else{
        res.writeHead(404, {'content-type': 'text/html'})
        fs.createReadStream (__dirname + '/error.html').pipe(res)
    };
})
    server.listen(port, hostname);
    console.log('server is successfully running!!');

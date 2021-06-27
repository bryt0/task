var http = require('http');

var server = http.createServer(function (req, res) {  
        if (req.url == '/name') { 
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
       
        res.write('<html><body><p>Abdulkadir Munir Bright.</p></body></html>');
        res.end();
    
    }
    
    else
        res.end('Invalid Request!');

});

server.listen(7000); 

console.log('Node.js web server at port 7000 is running..')

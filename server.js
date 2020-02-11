
const req = require('request');
const http = require('http');

 http.createServer(function(request, response) {    
    if (request.method =='POST'){       
         var body = '';
        console.log('Status Code:', response.statusCode);
        request.on('data', function(data){            
             body += data;
        });
        request.on('end', function(){
            var d = body;        
        response.write(d);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end();                       
            var options = {
                method:'post',
                    url: 'https://hook.integromat.com/15ani2p9j8pub4s7hdwaippiqqrqobvp',
                    json: true,
                    headers: {
                        'Content-Type': 'application/json',
                       Accept: 'application/json'
                   },
                   body: {d}                                       
                };
                req.post(options);          
        })    
}
}).listen(8080);
console.log('server started')

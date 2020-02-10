//const http = require('http');
//const https = require('https');
var http = require('follow-redirects').http;


var server = http.createServer(function(request, response) {
if (request.method == 'POST'){   
    var body = '';
    request.on('data', function(data){      
        body += data;
    });
    request.on('end', function(){
        try {
            var post = JSON.parse(body);
            console.log(post);         
            response.write(post);
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.redirect(308,'hook.integromat.com/15ani2p9j8pub4s7hdwaippiqqrqobvp');            
            response.end();
            return;
        }catch (err){
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write("Bad Post Data. Is yoour data a proper JSON?\n");
            response.end();
            return;
        }
    })
    // .request({
    //     followAllRedirects: true,
    //     url: 'https://hook.integromat.com/15ani2p9j8pub4s7hdwaippiqqrqobvp'
    // }, function (error, response, body){
    //     if (!error){
    //         console.log(response);
    //     }
    // }
    // );
}
});



server.listen(8080)
console.log("server started")


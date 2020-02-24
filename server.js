const req = require("request");
const http = require("http");

http
  .createServer(function(request, response) {
    if (request.method == "POST") {
      var body = "";
      console.log("Status Code:", response.statusCode);
      request.on("data", function(data) {
        body += data;
      });
      request.on("end", function() {
        try {
          var incomingData = JSON.parse(JSON.parse(json).body);          
         // JSON.stringify(incomingData);
          response.write(incomingData);
          response.writeHead(200, { "Content-Type": "text/plain" });
          response.end();
          var options = {
            method: "post",          
           url: process.env.URLintegromat,          
            json: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: { incomingData }
          };
          req.post(options);          
        } catch (err) {
          response.writeHead(500, { "Content-Type": "text/plain" });
          response.write("Bad Post Data. Is yoour data a proper JSON?\n");
          response.end();
          return;
        }
      });
    }
  })
  .listen(8080);

console.log("server started");

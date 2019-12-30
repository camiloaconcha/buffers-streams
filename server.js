const http = require("http");
const fs = require("fs");
const server = http.createServer();

server.on(request, function(request, response) {
  res.writeHead(200, { "Content-Type": "text/html" });

  fs.readFile("file/index.html", function(err, contents) {
    response.end(contents);
  });
});
server.on('close',function(){
    console.log("Connection closed...");
});
server.listen(8080);

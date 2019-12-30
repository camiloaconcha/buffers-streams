const http = require("http");
const fs = require("fs");

http
  .createServer(function(request, response) {
    res.writeHead(200, { "Content-Type": "text/html" });

    fs.readFile("file/index.html", function(err, contents) {
      response.end(contents);
    });
  })
  .listen(8080);

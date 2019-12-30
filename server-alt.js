const http = require("http");
const server = http.createServer();

http.createServer(function(request, response){
    response.writeHead(200);
    request.pipe(response);
}).listen(8000);


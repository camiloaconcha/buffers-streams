const fs = require("fs");
const http = require("http");

http
  .createServer(function(request, response) {
    const newFile = fs.createWriteStream("readme_copy.md");
    const fileBytes = request.headers["content-length"];
    let uploadedBytes = 0;
    request.pipe(newFile);

    request.on("readable", function() {
      var chunk = null;

      while (null !== (chunk = request.read())) {
        uploadedBytes += chunk.length;
        var progress = (uploadedBytes / fileBytes) * 100;

        response.write("progress "+parseInt(progress, 10) + "%\n")
      }
    });

    request.pipe(newFile);
    request.on("end", function() {
      response.end("uploaded");
    });

    
  })
  .listen(8080);

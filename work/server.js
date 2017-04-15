//const net = require('net');
const http = require('http')
    , fs = require('fs')
    , hostname = '127.0.0.1'
    , port = 3000
    , htmlFile = "index.html";

http.createServer(
  function(req, res) {
    //console.dir(req);
    var file = '.' + req.url
    fs.readFile(
      file,
      'binary',
      function(err, f) {
        if (err) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.write(err + "\n");
          res.end();
        } else {
          res.writeHead(200);
          res.write(f, "binary");
          res.end();
        }
      }
    );
  }
).listen(port);

console.log('Server running at http://' + hostname + ":" + port + '/' + htmlFile);


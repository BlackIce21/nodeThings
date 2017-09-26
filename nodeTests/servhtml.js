var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
  console.log("Request from: " + req.url);
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  var readStream = fs.createReadStream(__dirname + '/testpage.html', 'utf8');
  readStream.pipe(res);
});

server.listen(2700, '127.0.0.1');
console.log("Listening to port 2700");
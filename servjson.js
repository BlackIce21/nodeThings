var fs = require('fs');
var http = require('http');

var server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  var obj = require('./pets.json');
  res.end(JSON.stringify(obj));
});

server.listen(2400, '127.0.0.1');
console.log("listening port 2400");

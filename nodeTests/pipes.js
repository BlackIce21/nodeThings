var fs = require('fs');
var http = require('http');

// pipes dont require the on method

// var newRead = fs.createReadStream(__dirname + '/streamReading.txt', 'utf8');
// var newWrite = fs.createWriteStream(__dirname + '/pipeWriting.txt');
//
// newRead.pipe(newWrite);

// using read and write stream and pipe in server
var server = http.createServer(function(req,res){
  console.log("Requested url: " + req.url);
  res.writeHead(200, {'Content-Type':'text/plain'});
  var readStr = fs.createReadStream(__dirname + '/streamReading.txt', 'utf8');
  readStr.pipe(res);
});

server.listen(2000, '127.0.0.1');
console.log("Listening to port 2000");

var fs = require('fs');
var http = require('http');

//Creating readable stream
var myReadStream = fs.createReadStream(__dirname + '/streamReading.txt', 'utf8');
// Creating writable stream
var myWriteStream = fs.createWriteStream(__dirname + '/streamWriting.txt');

myReadStream.on('data', function(chunk){ //on method listener
  console.log("Received chunk");
  // Creating writable stream
  myWriteStream.write(chunk);
  console.log("Created write stream");
});
// end of readable stream



// Creating server
// var server = http.createServer((req, resp) => {
//   console.log('Request made:' + req.url)
//   resp.writeHead(200, {'Content-Type':'text/plain'});
//   resp.end('Responding now.');
// });
//
// server.listen(2000, '127.0.0.1');
// console.log("Listening to port 2000");
// end of create server

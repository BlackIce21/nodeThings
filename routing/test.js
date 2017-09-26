var fs = require('fs');
var http = require('http');

var server = http.createServer((req, res) => {
  console.log("Req from: " + req.url);
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    var rs = fs.createReadStream(__dirname + '/index.html', 'utf8');
    rs.pipe(res);
  } else if (req.url === '/aboutus') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    fs.createReadStream(__dirname + '/aboutus.html', 'utf8').pipe(res);

  } else if (req.url === '/info/people') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    var obj = [{
        "dog": "misty",
        "breed": "boxer"
      },
      {
        "dog": "stella",
        "breed": "pitbull"
      }
    ];
    res.end(JSON.stringify(obj));
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html'
    });
    fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
  }
});

server.listen(2000, '127.0.0.1');
console.log("listening to port 2000");

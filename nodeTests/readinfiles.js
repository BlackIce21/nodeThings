var fs = require('fs');

//sync reading and writing
var contents = fs.readFileSync('readme.txt', 'utf8');
fs.writeFileSync('written.txt', contents);
console.log(contents);


// async reading and writing

fs.readFile('readAsync.txt', 'utf8', function(err,data){
  fs.writeFile('writtenAsync.txt', data, (err) => {
    if (err) throw err;
  }, function(data){
    console.log("Async data:" + data);
  });
});

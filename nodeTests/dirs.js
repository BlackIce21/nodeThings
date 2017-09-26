var fs = require('fs');

// make directory
/*fs.mkdir('test', function(){
  fs.readFile('readme.txt','utf8', function(err,data){
    fs.writeFileSync('./test/newFile.txt', data);
  });
});*/

fs.unlink('./test/newFile.txt', function(){
  fs.rmdir('test', function(){
    console.log("directory removed.");
  });
});

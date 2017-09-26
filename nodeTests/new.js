var arr = [
  1,
  2,
  3,
  4
];

var inc = function(item){
  return item + 1;
};
console.log(arr);
console.log(arr.map(incr => incr + 1));

//palindrome
function pal(str){
var reg = /[\W_]/g;

var lower = str.toLowerCase().replace(reg, '');

var rev = lower.split('').reverse().join('');

if(rev === lower){
  console.log("Palindrome");
}
else {
  console.log("not");
}
}

pal("mom");

function sum(x){
  if(arguments.length == 2){
    return arguments[0] + arguments[1];
  }else {
    return function(y){
      return x + y;
    };
  }
}

console.log(sum((2),(5)));

var str = "adit".split('');

var sl = str.slice(2);
console.log(str);
console.log(sl);

var counter = function(arr){
  return "There are " + arr.length + " elements.";
};

var adding = function(a,b){
  return `The sum is ${a+b}.`;
};

var pi = Math.PI;

module.exports = {
  counter: counter,
  adding: adding,
  pi: pi
};

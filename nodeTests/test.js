console.log("Hello");
// global objects
// timeout
setTimeout(function(){
    console.log("after 2 seconds");
}, 2000);

//setinterval
var time = 0;
var timer = setInterval(function(){
    time +=2;
    console.log(time + " seconds have passed");
    if(time > 5){
        clearInterval(timer);
    }
}, 2000);
//printing dir and filepath
console.log(__dirname);
console.log(__filename);
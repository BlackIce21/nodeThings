function invokeAnother(func){
    func();
}

var log = function(){
    console.log("Invoking log function");
};

invokeAnother(log);

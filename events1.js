var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('someEvent', function(msg){
  console.log(msg);
});

emitter.emit('someEvent', 'Event emitted');

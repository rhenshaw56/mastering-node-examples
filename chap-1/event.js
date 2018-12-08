var EventEmitter = require('events').EventEmitter;

var Counter = function (init) {
  this.increment = function() {
    init++;
    console.log('init');
    const p = this.emit('incremented', init);
    console.log('pee', p);
  }
}

Counter.prototype = new EventEmitter();
var counter = new Counter(5);
var cb = function(count) {
  console.log('cout->', count);
}

counter.addListener('incremented', cb);

counter.increment();
counter.increment();
var Readable = require('stream').Readable;
var fs = require('fs');

const writeStream = fs.createWriteStream('./read-counter.txt', {
  flags: 'w',
  mode: 066
});

var readable = new Readable;

var count = 0;

readable._read = function() {
  if (++count > 15) {
    return readable.push(null);
  }
  setTimeout(() => {
    readable.push(count + "\n");
  }, 500);
};

readable.pipe(writeStream);
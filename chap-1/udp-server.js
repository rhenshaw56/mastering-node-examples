var dgram = require('dgram');

var client = dgram.createSocket('udp4');
var server = dgram.createSocket('udp4');

var message = process.argv[2] || 'message';

message = new Buffer(message);
server.on('message', function(msg) {
  process.stdout.write("Got Msg : " + msg + "\n");
  process.exit();
}).bind(4123);

client.send(message, 0, message.length, 4123, "localhost");
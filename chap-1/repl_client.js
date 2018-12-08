var net = require('net');
var sock = net.connect(8090);

process.stdin.pipe(sock);
sock.pipe(process.stdout);
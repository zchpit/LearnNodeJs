var portNumber = process.argv[2];
var net = require('net')
var strftime = require('strftime')

 var server = net.createServer(function (socket) {
   var data = strftime('%F %H:%M', new Date());
   socket.end(data + '\n');

 })
 server.listen(portNumber)

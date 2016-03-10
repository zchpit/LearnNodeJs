var through = require('through2');

function write (buffer, encoding, next) {
  var bufferString = buffer.toString();
  bufferString = bufferString.toUpperCase();
  this.push(bufferString);
  next();
}
function end (done) {
  done();
}
var stream = through(write, end);

process.stdin.pipe(stream).pipe(process.stdout);

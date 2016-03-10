var through = require('through2');
var split = require('split');

var isEven = false;

function write (buffer, encoding, next) {
  var bufferString = buffer.toString();
  if(isEven)
  {
    bufferString = bufferString.toUpperCase();
    isEven = false;
  }else {
    bufferString = bufferString.toLowerCase();
    isEven = true;
  }
  this.push(bufferString + '\n');
  next();
}
function end (done) {
  done();
}
var stream = through(write, end);

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);

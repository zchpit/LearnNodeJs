var file = process.argv[2];
var fs = require('fs');

var readedFileBuffor = fs.readFileSync(file);
var str = readedFileBuffor.toString();
var array = str.split('\n');

console.log(array.length-1);

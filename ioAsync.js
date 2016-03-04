var file = process.argv[2];
var fs = require('fs');

fs.readFile(file, function (err, data) {
  if (err) throw err;
  var str = data.toString();
  var array = str.split('\n');
  var solution = array.length-1;
  console.log(solution);
});

var url = process.argv[2];
var http = require('http');

http.get(url, function(res) {
  res.setEncoding('utf8');
  var str = "";

  res.on("data", function(chunk) {
    str += chunk;
  });
  res.on("end", function(e){
     console.log(str.length);
     console.log(str);
  })
}).on('error', function(e) {
});

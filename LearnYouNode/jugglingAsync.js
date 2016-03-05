var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var http = require('http');
var str1 = "";
var str2 = "";
var str3 = "";

http.get(url1, function(res) {
  res.setEncoding('utf8');

  res.on("data", function(chunk) {
    str1 += chunk;
  });
  res.on("end", function(e){
        http.get(url2, function(res2) {
          res2.setEncoding('utf8');
          res2.on("data", function(chunk2) {
            str2 += chunk2;
          });
          res2.on("end", function(e2){
              http.get(url3, function(res3) {
              res3.setEncoding('utf8');
              res3.on("data", function(chunk3) {
                str3 += chunk3;
              });
              res3.on("end", function(e3){
                  console.log(str1);
                  console.log(str2);
                  console.log(str3);
              });
          });
        });
    });
  })
}).on('error', function(e) {
});

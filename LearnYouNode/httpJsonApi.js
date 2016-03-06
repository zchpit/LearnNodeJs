var portNumber = process.argv[2];
var url = require('url');
var express = require('express');
var app = express();

app.get('/api/parsetime', function(req, res){
  var parsedUrl = url.parse(req.url, true);
  var date = new Date(parsedUrl.query.iso);

  res.json({ hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()  })
});
app.get('/api/unixtime', function(req, res){
  var parsedUrl = url.parse(req.url, true);
  var date = new Date(parsedUrl.query.iso);

  res.json({ unixtime: date.getTime() })
});

app.listen(portNumber);

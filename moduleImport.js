var dir = process.argv[2];
var fileExt = process.argv[3];

var mymodule = require('./moduleExport.js')
var callbackFunc = function (err, data) {
  if (err) throw err;

  for (var i = 0; i < data.length; i++) {
      if(data[i].endsWith('.' + fileExt))
      {
        console.log(data[i]);
      }
  }
}

mymodule(dir, fileExt, callbackFunc);

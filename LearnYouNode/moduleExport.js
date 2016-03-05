module.exports = function (dir, fileExt, calbackFunc)
{
  var fs = require('fs');
  fs.readdir(dir, function(err, list){
  if(err)
    return calbackFunc(err);

    list = list.filter(function (file){
      return file.endsWith('.' + fileExt);
    })
    calbackFunc(null, list);
});
}

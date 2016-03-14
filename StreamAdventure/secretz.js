var algorithm = process.argv[2];
var password = process.argv[3];
var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var concat = require('concat-stream');

var parser = tar.Parse();
parser.on('entry', function (e) {
    if(e.type === 'File'){
      var md5 = crypto.createHash('md5', { encoding: 'hex' });
      var encypted = e.pipe(md5).pipe(concat(function (hash) { console.log(hash + ' ' + e.path); })
      );
    }
});
var fs = require('fs');
var decrypt = crypto.createDecipher(algorithm, password);

process.stdin.pipe(decrypt).pipe(zlib.createGunzip()).pipe(parser);//.pipe(process.stdout);

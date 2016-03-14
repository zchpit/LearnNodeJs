var algorithm = process.argv[2];
var password = process.argv[3];
var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');

var parser = tar.Parse();
parser.on('entry', function (e) {
    console.dir(e);
});
var fs = require('fs');
//fs.createReadStream(process.stdin).pipe(parser);
var decrypt = crypto.createDecipher(algorithm, password);

process.stdin.pipe(decrypt).pipe(zlib.createGunzip()).pipe(parser).pipe(process.stdout);

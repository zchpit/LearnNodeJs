var crypto = require('crypto');
var algorithm = 'aes256';
var password = process.argv[2];


var decrypt = crypto.createDecipher(algorithm, password);
process.stdin.pipe(decrypt).pipe(process.stdout);

var duplexer = require('duplexer');
var Writable = require('stream').Writable;

module.exports = function(counter) {
    var countries = {};
    var capturer = Writable({objectMode: true});
    capturer._write = function(chunk, enc, next) {
        countries[chunk.country] = (countries[chunk.country] || 0) + 1;
        next();
    }
    capturer.on('finish', function() { counter.setCounts(countries); })
    return duplexer(capturer, counter);
};


/*
officjal solution:
var duplexer = require('duplexer2');
var through = require('through2').obj;

module.exports = function (counter) {
    var counts = {};
    var input = through(write, end);
    return duplexer({objectMode: true}, input, counter);

    function write (row, _, next) {
        counts[row.country] = (counts[row.country] || 0) + 1;
        next();
    }
    function end (done) {
        counter.setCounts(counts);
        done();
    }
};
*/

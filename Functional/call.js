function duckCount() {
    var args = Array.prototype.slice.call(arguments);

    return args.filter(function(message) {
      return Object.prototype.hasOwnProperty.call(message,'quack');
    }).length;
  }

module.exports = duckCount

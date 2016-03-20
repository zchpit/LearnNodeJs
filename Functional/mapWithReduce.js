module.exports = function arrayMap(arr, fn) {
  var words = [];
  arr.reduce(function(previousValue, currentValue, currentIndex, array) {
    return words.push(fn(currentValue));// || 0) + 1;
  },10);
  return words;
}

function countWords(inputWords) {
    var words = {};
    inputWords.reduce(function(previousValue, currentValue, currentIndex, array) {
      return words[currentValue] = (words[currentValue] || 0) + 1;
    },10);
    return words;
}

module.exports = countWords

function getShortMessages(messages) {
  var result = messages.map(function(message) { return message.message; }).filter(function(message) {
    return message.length < 50;
  })
  return result
}

module.exports = getShortMessages

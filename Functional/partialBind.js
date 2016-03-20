var slice = Array.prototype.slice;


function logger(namespace) {
  return function(messaage){
      console.log(namespace, slice.call(messaage,0).join(''));
  }
}

module.exports = logger

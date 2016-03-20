function reduce(arr, fn, initial) {
  if(arr.length > 0)
  {
       var value = arr[0];
       initial[arr[0]] = (initial[arr[0]] || 0) + 1;
       arr = arr.slice(1,arr.length);
       return reduce(arr, fn, initial);
  }
  else {
       return initial;
   }
}

module.exports = reduce

function getDependencies(tree) {
  Object.keys(tree).every(function(element, index, array){
    return getDependencies(element);
  });
  console.log(obj);
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
}

module.exports = getDependencies

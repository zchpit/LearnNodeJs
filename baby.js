var myStringArray = process.argv;

var arrayLength = myStringArray.length;
var sum = 0;
for (var i = 2; i < arrayLength; i++) {
    sum += parseInt(myStringArray[i]);
}

console.log(sum);

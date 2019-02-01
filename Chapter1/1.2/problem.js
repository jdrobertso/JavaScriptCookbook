var str1 = "This is a list of items: cherries, limes, oranges, apples."
var start = str1.indexOf(':');
var end = str1.indexOf('.', start+1);

var listStr = str1.substring(start+1, end);
var fruits=listStr.split(',');
console.log(fruits);
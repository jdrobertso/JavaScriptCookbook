var str1 = "This is a list of items: cherries, limes, oranges, apples."
var start = str1.indexOf(':');
var end = str1.indexOf('.', start+1);

var fruits = str1.substring(start+1, end).split(",");
console.log(fruits);

fruits.forEach(function(elmnt,indx,arry){
               arry[indx] = elmnt.trim();
});
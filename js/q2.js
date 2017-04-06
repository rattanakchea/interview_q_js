// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

// input: [1, 7, 3, 4]
// output:   [84, 12, 28, 21]

// could arr cotains zero ?

function getProductsOfAllIntsExceptAtIndex(arr) {

  var total = 1;
  arr.forEach(function(ele) {
    total *= ele;
  })

  // divide by itself
  return arr.map(function(ele) {
    return total / ele;
  });
}


module.exports = {
  getProductsOfAllIntsExceptAtIndex: getProductsOfAllIntsExceptAtIndex
}


// given an array [1, 10, -5, 1, -100];
// return 500, which comes from 10 * -5 * -100

var highestProductOf2;
var lowestProductOf2;
var highest, lowest;

var currentHighestProductOf3;

function findHighestProductOfThree(arr){
  if (arr.length < 3) {
    consol.log('Must have 3 or more elements in: ', arr);
    return;
  }

  var firstElement = arr[0];
  var secondElement = arr[1];
  var thirdElement = arr[2];

  currentHighestProductOf3 = firstElement * secondElement * thirdElement;
  highest = Math.max(firstElement, secondElement);
  lowest = Math.min(firstElement, secondElement);

  highestProductOf2 = firstElement * secondElement;
  lowestProductOf2 = firstElement * secondElement;
  for (var i=2; i < arr.length; i++) {
    var current = arr[i];


    // do we have a new highest product of 3?
          // it's either the current highest,
          // or the current times the highest product of two
          // or the current times the lowest product of two
    highestProductOf3 = Math.max(Math.max(
        highestProductOf3,
        current * highestProductOf2),
        current * lowestProductOf2);

    // do we have a new highest product of two?
    highestProductOf2 = Math.max(Math.max(
        highestProductOf2,
        current * highest),
        current * lowest);

    // do we have a new lowest product of two?
    lowestProductOf2 = Math.min(Math.min(
        lowestProductOf2,
        current * highest),
        current * lowest);

    // do we have a new highest?
    highest = Math.max(highest, current);

    // do we have a new lowest?
    lowest = Math.min(lowest, current);
  }
  return highestProductOf3;
}
module.exports = {
  findHighestProductOfThree: findHighestProductOfThree
}

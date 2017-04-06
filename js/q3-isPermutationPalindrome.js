// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome ↴ .
// Examples:
//
// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

// use a hash table to keep track of number of each character
// a string is permutation and palindrome when all the number of characters are paired,
// or only one character is odd

function isPermutationPalindrome(str) {

  var hashTable = {};
  for (var i=0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (hashTable.hasOwnProperty(ch)) {
      delete hashTable[ch];
    } else {
      hashTable[ch] = false;  //odd character
    }
  }
  console.log(hashTable);
  return Object.keys(hashTable).length <= 1;
}


module.exports = isPermutationPalindrome;

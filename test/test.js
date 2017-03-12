var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

// find highest product of three integer in an array
// var highProduct = require("../highestProductOfThree.js");
// describe('find highest product of three integer in an array', function() {
//     var arr = [1, 10, -5, 1, -100];
//     it('should match', function() {
//       assert.equal(500, highProduct.findHighestProductOfThree(arr));
//     });
// });

// test helloTest.js
// var hello = require("../helloTest.js");
// describe('HelloTest', function() {
//     it('should say Hello', function() {
//       assert.equal('HELLO', hello.sayHelloInEnglish());
//     });
// });

// test bracketCheck
var bracketCheck = require("../bracketCheck");
describe('interview', function() {
  describe('#bracketCheck()', function() {
    it('check for valid brackets', function() {
      var test1 = '{[]()}';  // true
      assert.equal(true, bracketCheck.bracketCheck(test1));
    });

    it('check for invalid brackets', function() {
      var test2 = '{[()}';  // false
      assert.equal(false, bracketCheck.bracketCheck(test2));
    });
  });
});

// test bracketCheck
var q2 = require("../q2");
describe('interview q2', function() {
    it('getProductsOfAllIntsExceptAtIndex', function() {
      var test = [1, 7, 3, 4];
      var expected = [84, 12, 28, 21];
      assert.deepEqual(expected, q2.getProductsOfAllIntsExceptAtIndex(test));
    });
});

// test bracketCheck
var isPermutationPalindrome = require("../q3-isPermutationPalindrome");
describe('isPermutationPalindrome', function() {
    it('should pass check a string for permutation is a valid palindrome', function() {
      var test = 'ivicc';
      assert.equal(true, isPermutationPalindrome(test));
    });

    it('should: check a string for permutation is a valid palindrome', function() {
      var test = 'iviccddiiabbara';
      assert.equal(false, isPermutationPalindrome(test));
    });
});

// test bracketCheck
var findMatchedParenthese = require("../q4-parentheseMatch");
describe('findMatchedParenthese()', function() {
    it('should pass findMatchedParenthese', function() {
      var test = "Some(wh (my ) to (lik (and this)))sing.";
      assert.equal(33, findMatchedParenthese(test, 4));
    });
});

// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."
//
// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.
//
// Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

function findMatchedParenthese(str, begin) {
// begin: the given parenthesis position
  var waitlist = 0;  // order of begin ( given in postion

  for (var i=0; i < str.length; i++) {
    var ch = str.charAt(i);
    if (ch === '(') {
      if (i !== begin) {
        waitlist++;
      }
    } else if (ch === ')') {
        if (waitlist === 0) {
          return i;
        } else {
          waitlist--;
        }
      }
  }

  return 'invalid string';

}

// Answer
function getClosingParen(sentence, openingParenIndex) {
    var openNestedParens = 0;

    for (var position = openingParenIndex + 1; position < sentence.length; position++) {
        var char = sentence[position];

        if (char === '(') {
            openNestedParens += 1;
        } else if (char === ')') {
            if (openNestedParens === 0) {
                return position;
            } else {
                openNestedParens -= 1;
            }
        }
    }

    throw new Error('No closing parenthesis :(');
}


module.exports = findMatchedParenthese;

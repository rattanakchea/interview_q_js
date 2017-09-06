//Always capitalize the first word in the sentence
//Always capitalize the last word in the sentence
// lowercase the following word, unless they are first or last word in the sentence
// a, the, to, at in, with, and, but, or
// Uppercase any words not in the list



// Pseudocode

// break the sentence into any array of words.
// Capitalize first word
// Capitalize last word

// loop the in between words
// check if in the list of exception words
// if so, lowercase it
// otherwise, capitalize it

// join the words into a sentence



// assumtion: sentence always has 2 or more words
/**
 * @param {sentence} string
 * @return {output} string
 */
function capitalizeSentence(sentence) {

  var list = ['a', 'the', 'to', 'at', 'in', 'with', 'and', 'but', 'or', 'is'];

  var words = sentence.split(" ");
  var wordCount = words.length;
  words[0] = capitalize(words[0]);
  words[wordCount-1] = capitalize(words[wordCount-1]);

  for (var i=1; i < wordCount-1; i++) {
    // in the list
    if (list.indexOf(words[i].toLowerCase()) !== -1) {
      words[i] = words[i].toLowerCase();
    } else {
      words[i] = capitalize(words[i].toLowerCase());
    }
  }
  var output = words.join(' ');
  return output;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Unit tests
describe('Capitalize Sentence', ()=> {
  var input = "i love solving problems and it is fun";
  var output = "I Love Solving Problems and It is Fun"
  
  it('positive test', () => {
    expect(capitalizeSentence(input)).toEqual(output);
  })

})

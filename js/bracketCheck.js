var test1 = '{[]()}';  //true
var test2 = '{[(])}';   //false
var openers = ['[', '{', '('];
var closers = [']', '}', ')'];

function isOpener(ch){
	return openers.indexOf(ch) !== -1;
}
function isCloser(ch){
	return closers.indexOf(ch) !== -1;
}

var list = [];
function isPair(ch1, ch2) {
  return (openers.indexOf(ch1) === closers.indexOf(ch2) && openers.indexOf(ch1) !== -1);
}
function testBracket(s) {
	if (s.length % 2 !== 0) {
  		return false;
  }
  for (i = 0; i < s.length; i++) {
    var ch = s.charAt(i);
    if (isOpener(ch)) {
    		list.push(ch);
    } else if ( list.length > 0) {
    	//find a match
    	if (!isPair(list.pop(), ch)) {
    		return false;
      }
    } else {   //not opener and is a closer
    	return false;
    }
	}
  var answer = (list.length === 0);
  // true: when all openers and closers match, thus list has no items
  // else list has remaining items, thus return false
  return answer;
}

module.exports = {
  bracketCheck: testBracket
}

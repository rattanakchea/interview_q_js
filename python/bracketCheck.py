test1 = '{[]()}';  #true
test2 = '{[(])}';   #false
openers = ['[', '{', '('];
closers = [']', '}', ')'];

def isPair(ch1, ch2):
    return ch1 in openers & (openers.index(ch1) == closers.index(ch2))

def isOpener(ch):
    ch in openers

def isCloser(c):
    ch in closers

list = []

def testBracket(s):
    length = len(s)
    if length % 2 != 0:
        answer = False
        print(answer);
        return

    for ch in s:
        if (isOpener(ch)):
            list.append(ch)
        elif len(list) > 0:
            if ( not isPair(list.pop(), ch)):
                answer = False
                print(answer)
                return
        else:
            answer = False
            print(answer)
            return
    
    answer = len(list) == 0
    print(answer)


testBracket(test1)
testBracket(test2)

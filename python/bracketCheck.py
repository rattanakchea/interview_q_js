test1 = '{[]()}';  #true
test2 = '{[(])}';   #false
openers = ['[', '{', '('];
closers = [']', '}', ')'];

def isPair(ch1, ch2):
    ch1 in openers & openers.index(ch1) == closers.index(ch2)

def isOpener(ch):
    openers.index(ch)

def isCloser(c):
    closers.index(ch)

list = []

def testBracket(s):
    length = len(s)
    if length % 2 != 0:
        return False

    for ch in s:
        if (isOpener(ch)):
            list.append(ch)
        elif len(list) > 0:
            if ( not isPair(list.pop(), ch)):
                answer = False
        else:
            answer = False
    
    answer = len(list) == 0
    print(answer)


testBracket(test1)

function canTwoMoviesFillFlight(movieLengths, flightLength) {

    // movie lengths we've seen so far
    var movieLengthsSeen = new Set();
    for (var i = 0; i < movieLengths.length; i++) {
        var firstMovieLength = movieLengths[i];
        var matchingSecondMovieLength = flightLength - firstMovieLength;
        if (movieLengthsSeen.has(matchingSecondMovieLength)) {
            return true;
        }
        movieLengthsSeen.add(firstMovieLength);
    }
    // we never found a match, so return false
    return false;
}
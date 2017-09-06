
m = [1, 3, 4, 2, 5]
f = 12

def can_two_movies_fill_flight(movie_lengths, fligth_length):

    # movie lengths we've seen so far
    movie_lengths_seen = set()

    for first_movie_length in movie_lengths:

        matching_second_movie_length = fligth_length - first_movie_length
        if matching_second_movie_length in movie_lengths_seen:
            return True

        movie_lengths_seen.add(first_movie_length)

        # we never found a match, so return False
    
    return False


print(can_two_movies_fill_flight(m, f))
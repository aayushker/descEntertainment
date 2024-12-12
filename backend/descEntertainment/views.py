# views.py
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Movie

@api_view(['POST'])
def like_movie(request):
    """
    Endpoint to like a movie and save it to the database.
    The movie's IMDb ID should be passed to identify it.
    """
    movie_data = request.data
    imdb_id = movie_data.get("imdbID")
    
    if not imdb_id:
        return Response({"error": "imdbID is required"}, status=status.HTTP_400_BAD_REQUEST)

    movie, created = Movie.objects.get_or_create(imdbID=imdb_id, defaults=movie_data)

    if created:
        return Response({"message": "Movie liked successfully!"}, status=status.HTTP_201_CREATED)
    else:
        return Response({"message": "Movie already exists"}, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_movie_details(request, imdb_id):
    """
    Endpoint to retrieve the full details of a movie by its IMDb ID.
    """
    try:
        movie = Movie.objects.get(imdbID=imdb_id)
        movie_data = {
            "Title": movie.Title,
            "Year": movie.Year,
            "Rated": movie.Rated,
            "Released": movie.Released,
            "Runtime": movie.Runtime,
            "Genre": movie.Genre,
            "Director": movie.Director,
            "Writer": movie.Writer,
            "Actors": movie.Actors,
            "Plot": movie.Plot,
            "Language": movie.Language,
            "Country": movie.Country,
            "Awards": movie.Awards,
            "Poster": movie.Poster,
            "Ratings": movie.Ratings,
            "Metascore": movie.Metascore,
            "imdbRating": movie.imdbRating,
            "imdbVotes": movie.imdbVotes,
            "imdbID": movie.imdbID,
            "Type": movie.Type,
            "DVD": movie.DVD,
            "BoxOffice": movie.BoxOffice,
            "Production": movie.Production,
            "Website": movie.Website,
            "Response": movie.Response
        }
        return Response(movie_data)
    except Movie.DoesNotExist:
        return Response({"error": "Movie not found"}, status=status.HTTP_404_NOT_FOUND)

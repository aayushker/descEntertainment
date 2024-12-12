# models.py

from django.db import models

class Movie(models.Model):
    Title = models.CharField(max_length=255)
    Year = models.CharField(max_length=4)
    Rated = models.CharField(max_length=20)
    Released = models.CharField(max_length=100)
    Runtime = models.CharField(max_length=100)
    Genre = models.CharField(max_length=100)
    Director = models.CharField(max_length=255)
    Writer = models.CharField(max_length=255)
    Actors = models.CharField(max_length=255)
    Plot = models.TextField()
    Language = models.CharField(max_length=100)
    Country = models.CharField(max_length=100)
    Awards = models.CharField(max_length=255)
    Poster = models.URLField()
    Ratings = models.JSONField()
    Metascore = models.CharField(max_length=50)
    imdbRating = models.CharField(max_length=50)
    imdbVotes = models.CharField(max_length=50)
    imdbID = models.CharField(max_length=50, unique=True)
    Type = models.CharField(max_length=50)
    DVD = models.CharField(max_length=50)
    BoxOffice = models.CharField(max_length=50)
    Production = models.CharField(max_length=100)
    Website = models.URLField()
    Response = models.CharField(max_length=50)

    def __str__(self):
        return self.Title

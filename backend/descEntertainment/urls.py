# urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('like/', views.like_movie, name='like_movie'),
    path('movie/<str:imdb_id>/', views.get_movie_details, name='get_movie_details'),
]

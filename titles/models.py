from django.db import models

# Create your models here.
class Title(models.Model):
    GENRE_CHOICES = [
        ('action', 'Action'),
        ('drama', 'Drama'),
        ('comedy', 'Comedy'),
        ('horror', 'Horror'),
        ('romance', 'Romance'),
        ('sci-fi', 'Sci-Fi'),
        ('documentary', 'Documentary'),
    ]
    genre = models.CharField(max_length=20, choices=GENRE_CHOICES)
    CONTENT_TYPE_CHOICES = [
        ('movie', 'Película'),
        ('series', 'Serie'),
        ('book', 'Libro'),
    ]
    content_type = models.CharField(max_length=20, choices=CONTENT_TYPE_CHOICES)
    title = models.CharField(max_length=100)
    note = models.CharField(max_length=300)

    def __str__(self):
        return self.title
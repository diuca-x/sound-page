from django.db import models

# Create your models here.

#always python manage.py makemigrations
#python manage.py migrate


class Genere(models.Model):
    genere = models.CharField(max_length=50,null=False)

    def __str__(self):
        return self.genere

class Track(models.Model): 
    url = models.CharField(max_length=1000,null=False)
    name = models.CharField(max_length=50,null=False)
    remix = models.BooleanField(null=False)
    genres = models.ManyToManyField(Genere)


    #relationship con genere





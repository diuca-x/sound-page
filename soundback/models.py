from django.db import models

# Create your models here.

#always python manage.py makemigrations
#python manage.py migrate


class Track(models.Model): 
    url = models.CharField(max_length=1000,null=False)
    name = models.CharField(max_length=50,null=False)
    remix = models.BooleanField(null=False)

    #relationship con genere

class Genere(models.Model):
    genere = models.CharField(max_length=50,null=False)

class Trackgen(models.Model):
    track_id = models.ForeignKey(Track, on_delete=models.CASCADE,null=False)
    genere_id = models.ForeignKey(Genere, on_delete=models.CASCADE,null=False)



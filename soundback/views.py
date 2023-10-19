from django.shortcuts import render
from django.http import HttpResponse

from soundback.models import Track, Genere
# Create your views here.



def hello (request): 
    
    #track = Track.objects.get(id=1)
    return render(request, "hello.html",{"name":"asd"})

def calculate():  
    x= 1
    y = 2
    return x
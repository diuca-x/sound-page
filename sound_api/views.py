from django.shortcuts import render
from django.http import JsonResponse
import json

from soundback.models import Track


# Create your views here.
def basic(request):
    tracks = Track.objects.all()
    data = []
    for i in tracks:
        data.append({"name" : i.name, "remix" : i.remix, "generes" : i.generes.all()[0].genere, "show": i.show})
        print(i.serialize())
    


    return JsonResponse({"msg": data})
from django.shortcuts import render
from django.http import JsonResponse
import json
from rest_framework.response import Response
from rest_framework.decorators import api_view

from soundback.models import Track


# Create your views here.
@api_view(["GET"])
def basic(request):
    tracks = Track.objects.all()
    data = []
    for i in tracks:
        data.append({"name" : i.name, "remix" : i.remix, "generes" : i.generes.all()[0].genere, "show": i.show})
        #print(i.serialize())
        

    print("asd")
    return Response(data)
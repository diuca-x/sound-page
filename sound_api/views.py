from django.shortcuts import render
from django.http import JsonResponse
import json
from rest_framework.response import Response
from rest_framework.decorators import api_view

from soundback.models import Track
from soundback.serializer import TrackSerializer


# Create your views here.
@api_view(["GET"])
def basic(request):
    tracks = Track.objects.all()
    data = []
    for i in tracks:
        data.append(TrackSerializer(i).data)
        #print(i.serialize())
    print(data)

    
    return Response(data )
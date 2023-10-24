from django.shortcuts import render
from django.http import JsonResponse
import json
from rest_framework.response import Response
from rest_framework.decorators import api_view

from soundback.models import Track
from soundback.serializer import TrackSerializer


# Create your views here.
@api_view(["GET"])
def get_tracks(request):
    tracks = Track.objects.all()
    data = []
    for i in tracks:
        data.append(TrackSerializer(i).data)
        #print(i.serialize())
    print(data)

    
    return Response(data )

@api_view(["POST"])
def basic(request, *args,**kwargs):
    serializer = TrackSerializer(data = request.data)
    print(serializer.initial_data)
    if serializer.is_valid(raise_exception=True):
        #data = serializer.save()
        print(serializer.data)
        print("asd")
        return Response(serializer.data)
    return Response("asd")
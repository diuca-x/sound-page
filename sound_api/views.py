
import json
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics, mixins

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


class TrackDetailAPIView(generics.RetrieveAPIView):
    queryset=Track.objects.all()
    serializer_class = TrackSerializer
    #lookup_field

class TrackCreateAPIView(generics.CreateAPIView):
    queryset=Track.objects.all()
    serializer_class = TrackSerializer

    def perform_create(self, serializer):
        print(serializer.validated_data)
        serializer.save()
    
class TrackMixinView(mixins.ListModelMixin,mixins.RetrieveModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):
    queryset = Track.objects.all()
    serializer_class = TrackSerializer
    lookup_field="pk"
    
    def get(self,request,*args,**kwargs):
        id = kwargs.get("pk")
        if id is not None:
            return self.retrieve(request,*args,**kwargs)
        return self.list(request, *args, **kwargs)
    
    def post(self,request,*args,**kwargs):
        return self.create(request,*args,**kwargs)
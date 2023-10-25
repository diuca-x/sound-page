from django.urls import path
from . import views

urlpatterns = [
    path("tracks/", views.get_tracks),
    path("basic/", views.basic),
    path("tracks/<int:pk>/", views.TrackDetailAPIView.as_view())
]

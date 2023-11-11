from django.urls import path
from . import views

urlpatterns = [
    path("tracks/", views.get_tracks),
    path("basic/<int:pk>/", views.TrackMixinView.as_view()),
    path("basic/", views.TrackMixinView.as_view()),
    path("tracks/<int:pk>/", views.TrackDetailAPIView.as_view()),
    path("tracks/create/", views.TrackCreateAPIView.as_view())
]

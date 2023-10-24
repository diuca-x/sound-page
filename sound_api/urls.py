from django.urls import path
from . import views

urlpatterns = [
    path("tracks/", views.get_tracks),
    path("basic/", views.basic)
]
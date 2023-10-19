from django.contrib import admin

# Register your models here.
from .models import Track,Genere

class TrackAdmin(admin.ModelAdmin):
    list_display = ["name"]
    list_filter = ["generes", "show","name", "remix"]
class GenereAdmin(admin.ModelAdmin):
    list_display = ["genere"]
    list_filter = ["genere"]
    
    

admin.site.register(Track, TrackAdmin)
admin.site.register(Genere,GenereAdmin)

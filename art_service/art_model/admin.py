from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Art)
admin.site.register(ArtThumnailImage)
admin.site.register(ArtImages)
admin.site.register(ArtTag)
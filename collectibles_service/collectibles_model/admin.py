from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Collectibles)
admin.site.register(CollectiblesThumnailImage)
admin.site.register(CollectiblesImages)
admin.site.register(CollectiblesTag)
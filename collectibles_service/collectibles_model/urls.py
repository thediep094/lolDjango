from django.urls import path
from . import views

urlpatterns = [
    path('collectibless/<str:id>/', views.getCollectibles, name="collectibles"),
    path('collectibless/', views.getCollectibless, name="collectibless"),
]

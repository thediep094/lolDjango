from django.urls import path
from . import views

urlpatterns = [
    path('arts/<str:id>/', views.getArt, name="art"),
    path('arts/', views.getArts, name="arts"),
]

from django.urls import path
from . import views

urlpatterns = [
    path('apparels/<str:id>/', views.getApparel, name="apparel"),
    path('apparels/', views.getApparels, name="apparels"),
]

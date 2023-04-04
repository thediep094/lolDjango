from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('cart/<str:id>', views.getCart, name="cart"),
]

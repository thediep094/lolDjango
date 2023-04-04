from django.urls import path
from . import views

urlpatterns = [
    path('orders/<str:id>/', views.getOrder, name="order"),
]

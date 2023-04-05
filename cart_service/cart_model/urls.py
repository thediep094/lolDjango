from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('cart/<str:id>', views.getCart, name="cart"),
    path('cart/update/<str:id>', views.updateCart, name="updateCart"),
    path('cart/clear/<str:id>', views.clearCart, name="clearCart"),
    path('cart/create/', views.createCart, name="createCart"),
    path('cart/create/<str:cart_id>/<str:cart_item_id>/', views.removeItemCart, name="removeItemCart")
]

from django.shortcuts import render,get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser 
from rest_framework import status
from .models import *
from .serializers import *
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = {
        "data": "test data"
    }
    return Response(routes)


@api_view(['GET'])
def getCart(request, id):
    cart = Cart.objects.get(id = id)
    serializer = CartSerializer(cart, many= False)
    cart_data = dict(serializer.data)
    items = cart_data["items"]
    for i in range(len(items)):
        url = items[i]["itemURL"]
        print(url)
        response = requests.get(url).json()
        cart_data["items"][i]["item"] = response
    return Response(cart_data)


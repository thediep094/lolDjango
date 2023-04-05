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
        response = requests.get(url).json()
        cart_data["items"][i]["item"] = response
    return Response(cart_data)

@api_view(['POST'])
def updateCart(request, id):
    cart = get_object_or_404(Cart, id=id)
    serializer = CartSerializer(cart, data=request.data)

    # JSON
    # {
    #   "account": "1",
    #   "items": [
    #     {
    #       "product_id": "1",
    #       "itemType": "apparel",
    #       "quantity": 2
    #     }
    #   ]
    # }

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
@api_view(['GET'])   
def clearCart(request, id):
    cart = get_object_or_404(Cart, id = id)
    print(cart)
    cart.items.all().delete()
    cart.save()  # Save the updated cart
    serializer = CartSerializer(cart, many=False)
    return Response(serializer.data)


 
@api_view(['POST'])
def createCart(request):
    serializer = CartSerializer(data=request.data)
    if serializer.is_valid():
        cart = serializer.save()
        return Response({"detail": "Cart created successfully", "cart_id": cart.id}, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def removeItemCart(request, cart_id, cart_item_id):
    cart = get_object_or_404(Cart, id=cart_id)
    cart_item = get_object_or_404(CartItem, id=cart_item_id, cart=cart)

    cart_item.delete()
    cart.save()

    serializer = CartSerializer(cart, many=False)
    return Response(serializer.data)

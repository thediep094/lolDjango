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
def getOrders(request, account_id):
    orders = Order.objects.filter(account=account_id)
    serializer = OrderSerializer(orders, many=True)
    orders_data = serializer.data
    for order in orders_data:
        items = order["items"]
        for i in range(len(items)):
            url = items[i]["itemURL"]
            response = requests.get(url).json()
            order["items"][i]["item"] = response
    return Response(orders_data)

@api_view(['POST'])
def createOrder(request):

    # JSON
    # {
    #     "account": "1",
    #     "items": [
    #         {
    #             "product_id": "1",
    #             "itemType": "apparel",
    #             "quantity": 2
    #         },
    #         {
    #             "product_id": "3",
    #             "itemType": "apparel",
    #             "quantity": 1
    #         }
    #     ]
    # }


    serializer = OrderSerializer(data=request.data)
    if serializer.is_valid():
        order = serializer.save()
        return Response({"detail": "Cart created successfully", "order_id": order.id}, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

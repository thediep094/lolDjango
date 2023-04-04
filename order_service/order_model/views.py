import requests
import json

from django.shortcuts import render,get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser 
from rest_framework import status
from .models import *
from .serializers import *
# Create your views here.

@api_view(['GET'])
def getOrder(request, id):
    order = Order.objects.get(id=id)
    serializer = OrderSerializer(order, many=False)
    order_ret = dict(serializer.data)
    items = order_ret["items"]
    for i in range(len(items)):
        url = items[i]["itemURL"]
        response = requests.get(url).json()
        order_ret["items"][i]["item"] = response
    return Response(order_ret)
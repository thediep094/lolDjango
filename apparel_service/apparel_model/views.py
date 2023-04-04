from django.shortcuts import render,get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser 
from rest_framework import status
from .models import *
from .serializers import *
from .serializers import *
# Create your views here.

@api_view(['GET'])
def getApparels(request):
    apparels = Apparel.objects.all()
    serializer = ApparelSerializer(apparels, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getApparel(request, id):
    apparels = Apparel.objects.get(id=id)
    serializer = ApparelSerializer(apparels, many=False)
    return Response(serializer.data)

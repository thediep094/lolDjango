from rest_framework.serializers import ModelSerializer
from .models import *


class CollectiblesTagSerializer(ModelSerializer):
    class Meta:
        model = CollectiblesTag
        fields = '__all__'


class CollectiblesThumnailImageSerializer(ModelSerializer):
    class Meta:
        model = CollectiblesThumnailImage
        fields = '__all__'


class CollectiblesImagesSerializer(ModelSerializer):
    class Meta:
        model = CollectiblesImages
        fields = '__all__'


class CollectiblesSerializer(ModelSerializer):
    tags = CollectiblesTagSerializer(many=True, read_only=True)
    images = CollectiblesImagesSerializer(many=True, read_only=True)
    thumbnail_images = CollectiblesThumnailImageSerializer(many=True, read_only=True)

    class Meta:
        model = Collectibles
        fields = '__all__'

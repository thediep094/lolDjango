from rest_framework.serializers import ModelSerializer
from .models import *


class ArtTagSerializer(ModelSerializer):
    class Meta:
        model = ArtTag
        fields = '__all__'


class ArtThumnailImageSerializer(ModelSerializer):
    class Meta:
        model = ArtThumnailImage
        fields = '__all__'


class ArtImagesSerializer(ModelSerializer):
    class Meta:
        model = ArtImages
        fields = '__all__'


class ArtSerializer(ModelSerializer):
    tags = ArtTagSerializer(many=True, read_only=True)
    images = ArtImagesSerializer(many=True, read_only=True)
    thumbnail_images = ArtThumnailImageSerializer(many=True, read_only=True)

    class Meta:
        model = Art
        fields = '__all__'

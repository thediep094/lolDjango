from rest_framework.serializers import ModelSerializer
from .models import *


class ApparelTagSerializer(ModelSerializer):
    class Meta:
        model = ApparelTag
        fields = '__all__'


class ApparelThumnailImageSerializer(ModelSerializer):
    class Meta:
        model = ApparelThumnailImage
        fields = '__all__'


class ApparelImagesSerializer(ModelSerializer):
    class Meta:
        model = ApparelImages
        fields = '__all__'


class ApparelSerializer(ModelSerializer):
    tags = ApparelTagSerializer(many=True, read_only=True)
    images = ApparelImagesSerializer(many=True, read_only=True)
    thumbnail_images = ApparelThumnailImageSerializer(many=True, read_only=True)

    class Meta:
        model = Apparel
        fields = '__all__'

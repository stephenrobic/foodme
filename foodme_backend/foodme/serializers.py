from rest_framework import serializers
from . import models


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Post
        fields = ('id', 'title', 'ingredients', 'directions', 'created_by', 'created_at', 'updated_at')
        # fields = ('id', 'title', 'ingredients', 'created_at', 'updated_at')


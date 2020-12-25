from rest_framework import serializers
from .models import Post
# from forums.serializers import ForumSerializer


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post

        fields = ('id', 'issuer', 'title', 'forum',
                  'desc', 'created_at', 'updated_at')

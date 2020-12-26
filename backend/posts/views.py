from django.shortcuts import render
from rest_framework import generics
from .models import Post
from .serializers import PostSerializer


class PostFromSameForumList(generics.ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        forum_id = self.kwargs['forum_id']
        return Post.objects.filter(forum__id=forum_id)


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

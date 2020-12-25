from django.shortcuts import render
from rest_framework import generics
from .models import Post
from .serializers import PostSerializer


class PostFromSameForumList(generics.ListCreateAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        forum = self.kwargs['forum']
        return Post.objects.filter(post__forum=forum.forumType)


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

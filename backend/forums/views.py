from django.shortcuts import render
from rest_framework import generics
from .models import Forum
from .serializers import ForumSerializer


class ForumList(generics.ListCreateAPIView):
    queryset = Forum.objects.all()
    serializer_class = ForumSerializer


class ForumDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Forum.objects.all()
    serializer_class = ForumSerializer

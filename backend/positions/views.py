from django.shortcuts import render
from rest_framework import generics
from .models import Position
from .serializers import PositionSerializer

# search
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from django.contrib.postgres import search


class PositionList(generics.ListCreateAPIView):
    queryset = Position.objects.all()
    serializer_class = PositionSerializer


class PositionSearch(generics.ListCreateAPIView):
    queryset = Position.objects.all()
    serializer_class = PositionSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['title', 'senority',
                        'jobtype', 'industry', 'company__user__city']
    search_fields = ['@title', '@desc']


class PositionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Position.objects.all()
    serializer_class = PositionSerializer


class PositionFromCompanyList(generics.ListCreateAPIView):
    serializer_class = PositionSerializer

    def get_queryset(self):
        company_id = self.kwargs['id']
        # forum_id = self.request.GET.get('forum_id', '')
        return Position.objects.filter(company__id=company_id)

from django.shortcuts import render
from rest_framework import generics
from .models import AppliedJob
from .serializers import AppliedJobSerializer, AppliedJobEmployeeViewSerializer, AppliedJobCompanyViewSerializer
from rest_framework import filters
from positions.models import Position

# search
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from django.contrib.postgres import search


class AppliedJobList(generics.ListCreateAPIView):
    queryset = AppliedJob.objects.all()
    serializer_class = AppliedJobSerializer


class AppliedJobSearchList(generics.ListAPIView):
    queryset = AppliedJob.objects.all()
    serializer_class = AppliedJobSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['position']


class AppliedJobDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = AppliedJob.objects.all()
    serializer_class = AppliedJobSerializer


class AppliedJobEmployeeViewList(generics.ListAPIView):
    serializer_class = AppliedJobEmployeeViewSerializer

    def get_queryset(self):
        employee_id = self.kwargs['employee_id']
        return AppliedJob.objects.filter(employee__id=employee_id)


class AppliedJobCompanyViewList(generics.ListAPIView):
    serializer_class = AppliedJobCompanyViewSerializer

    def get_queryset(self):
        given_company_id = self.kwargs['company_id']
        position_ids = Position.objects.filter(
            company=given_company_id).only('id').all()
        return AppliedJob.objects.filter(id__in=position_ids)

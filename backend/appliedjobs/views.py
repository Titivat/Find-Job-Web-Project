from django.shortcuts import render
from rest_framework import generics
from .models import AppliedJob
from .serializers import AppliedJobSerializer
from rest_framework import filters
from positions.models import Position


class AppliedJobList(generics.ListCreateAPIView):
    queryset = AppliedJob.objects.all()
    serializer_class = AppliedJobSerializer


class AppliedJobDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = AppliedJob.objects.all()
    serializer_class = AppliedJobSerializer


class AppliedJobEmployeeViewList(generics.ListAPIView):
    serializer_class = AppliedJobSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return AppliedJob.objects.filter(employee=user_id)


class AppliedJobCompanyViewList(generics.ListAPIView):
    serializer_class = AppliedJobSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        position_id = Position.objects.filter(id=user_id)
        return AppliedJob.objects.filter(position=position_id)

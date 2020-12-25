from django.shortcuts import render
from rest_framework import generics
from .models import AppliedJob
from .serializers import AppliedJobSerializer


class AppliedJobList(generics.ListCreateAPIView):
    queryset = AppliedJob.objects.all()
    serializer_class = AppliedJobSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = AppliedJob.objects.all()
    serializer_class = AppliedJobSerializer


class AppliedJobUserViewList(generics.ListAPIView):
    serializer_class = AppliedJobSerializer
    filter_backends = [DjangoFilterBackend]

    def get_queryset(self):
        user_type = self.kwargs['user_type']  # 'employee' or 'company'
        if str(user_type) == "employee":
            return AppliedJob.objects.filter(employee=self.kwargs['employee'])
        # elif str(user_type) == "company":

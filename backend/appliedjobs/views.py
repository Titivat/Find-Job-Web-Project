# from django.shortcuts import render
# from rest_framework import generics
# from .models import AppliedJob
# from .serializers import AppliedJobSerializer


# class AppliedJobList(generics.ListCreateAPIView):
#     queryset = AppliedJob.objects.all()
#     serializer_class = AppliedJobSerializer


# class AppliedJobEmployeeViewList(generics.ListAPIView):
#     serializer_class = AppliedJobSerializer

#     def get_queryset(self):
#         return AppliedJob.objects.filter(employee=self.kwargs['employee'])


# class AppliedJobCompanyViewList(generics.ListAPIView):
#     serializer_class = AppliedJobSerializer

#     def get_queryset(self):
#         return AppliedJob.objects.filter(employee=self.kwargs['company'])


# class AppliedJobDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = AppliedJob.objects.all()
#     serializer_class = AppliedJobSerializer

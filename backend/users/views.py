from django.shortcuts import render
from .models import User, Company, Employee
from rest_framework import generics, status
from .serializers import EmployeeSerializer, CompanySerializer, UserEMSerializer, CityListSerializer, JobTypeListSerializer
from requests.models import Response

from positions.models import Position


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserEMSerializer


class EmployeeList(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class EmployeeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class CompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


#  CityList, JobTypeList

class CityList(generics.ListAPIView):
    serializer_class = CityListSerializer

    def get_queryset(self):
        return User.objects.all().distinct('city')


class JobTypeList(generics.ListAPIView):
    serializer_class = JobTypeListSerializer

    def get_queryset(self):
        return Position.objects.all().distinct('jobtype')

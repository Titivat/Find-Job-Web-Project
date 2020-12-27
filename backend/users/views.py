from django.shortcuts import render
from .models import User, Company, Employee
from rest_framework import generics, status
# , UserToEmployee, UserToCompany
from .serializers import EmployeeSerializer, CompanySerializer, UserEMSerializer, CityListSerializer, JobTypeListSerializer, UserLoginSerializer
from requests.models import Response

from positions.models import Position

# search
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from django.contrib.postgres import search


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserEMSerializer


class EmployeeList(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class EmployeeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class EmployeeSearchDetail(generics.ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['user__id']


class CompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanySearchDetail(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['user__id']


#  CityList, JobTypeList

class CityList(generics.ListAPIView):
    serializer_class = CityListSerializer

    def get_queryset(self):
        return User.objects.all().distinct('city')


class JobTypeList(generics.ListAPIView):
    serializer_class = JobTypeListSerializer

    def get_queryset(self):
        return Position.objects.all().distinct('jobtype')


class LoginView(generics.ListAPIView):
    serializer_class = UserLoginSerializer

    def get_queryset(self):
        given_email = self.kwargs['email']
        given_password = self.kwargs['password']
        return User.objects.filter(email=given_email, password=given_password)

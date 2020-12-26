from django.shortcuts import render
from .models import User, Company, Employee
from rest_framework import generics, status
from .serializers import EmployeeSerializer, CompanySerializer, UserEMSerializer
from requests.models import Response


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserEMSerializer


class CompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class CompanyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class EmployeeList(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class EmployeeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

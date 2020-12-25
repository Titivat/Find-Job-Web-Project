from django.urls import path
from .views import EmployeeList, EmployeeDetail, CompanyList, CompanyDetail

urlpatterns = [
    path('employee/', EmployeeList.as_view(), name='Employee_list'),
    path('employee/<int:pk>/', EmployeeDetail.as_view(), name='Employee_detail'),
    #     path('employee/<int:pk>/Delete/',
    #          EmployeeDelete.as_view(), name='Employee_delete'),

    path('company/', CompanyList.as_view(), name='Company_list'),
    path('company/<int:pk>/', CompanyDetail.as_view(), name='Company_detail'),
    #     path('company/<int:pk>/Delete/',
    #          CompanyDelete.as_view(), name='Company_delete'),
]

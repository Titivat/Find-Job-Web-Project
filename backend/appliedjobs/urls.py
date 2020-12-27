from django.urls import path
from .views import AppliedJobList, AppliedJobDetail, AppliedJobEmployeeViewList, AppliedJobCompanyViewList, AppliedJobSearchList

urlpatterns = [
    path('', AppliedJobList.as_view(), name='Position_list'),
    path('search/', AppliedJobSearchList.as_view(), name='Position_search_list'),
    path('<int:pk>/', AppliedJobDetail.as_view(), name='Position_detail'),



    path('employee/<int:employee_id>/', AppliedJobEmployeeViewList.as_view(),
         name='Applied Job view for Employee'),
    path('company/<int:company_id>/', AppliedJobCompanyViewList.as_view(),
         name='Applied Job view for Company'),
]

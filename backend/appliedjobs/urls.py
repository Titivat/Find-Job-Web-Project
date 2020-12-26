from django.urls import path
from .views import AppliedJobList, AppliedJobDetail, AppliedJobEmployeeViewList, AppliedJobCompanyViewList

urlpatterns = [
    path('', AppliedJobList.as_view(), name='Position_list'),
    path('<int:pk>/', AppliedJobDetail.as_view(), name='Position_detail'),
    # path('(?P<user_id>.+)/', AppliedJobEmployeeViewList.as_view(),
    #      name='Applied Job view for Employee'),
    # path('company/(?P<user_id>.+)/', AppliedJobCompanyViewList.as_view(),
    #      name='Applied Job view for Company'),

    path('employee/<int:pk>/', AppliedJobEmployeeViewList.as_view(),
         name='Applied Job view for Employee'),
    path('company/<int:pk>/', AppliedJobCompanyViewList.as_view(),
         name='Applied Job view for Company'),
]

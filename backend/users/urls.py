from django.urls import path
from .views import EmployeeList, EmployeeDetail, CompanyList, CompanyDetail, UserList, CityList, JobTypeList, LoginView

urlpatterns = [

    # path('login/<str:username>/<str:password>/',
    #      LoginView.as_view(), name='Login_View'),
    path('login/', LoginView.as_view(), name='Login_View'),
    path('user/', UserList.as_view(), name='User_list'),
    # path('user/<int:pk>/employee', UserToEmployee.as_view(), name='User_list'),
    # path('user/<int:pk>/employee', UserToCompany.as_view(), name='User_list'),

    path('employee/', EmployeeList.as_view(), name='Employee_list'),
    path('employee/<int:pk>/', EmployeeDetail.as_view(), name='Employee_detail'),

    path('company/', CompanyList.as_view(), name='Company_list'),
    path('company/<int:pk>/', CompanyDetail.as_view(), name='Company_detail'),

    # for search
    path('city/', CityList.as_view(), name='City_list'),
    path('jobType/', JobTypeList.as_view(), name='JobType_list'),

]

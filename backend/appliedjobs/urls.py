from django.urls import path
from .views import AppliedJobList, AppliedJobDetail, AppliedJobUserViewList

urlpatterns = [
    path('', AppliedJobList.as_view(), name='Position_list'),
    path('<int:pk>/', AppliedJobDetail.as_view(), name='Position_detail'),
    path('(?P<user_type>.+)/', AppliedJobUserViewList.as_view(),
         name='Same_Forum_list'),
]

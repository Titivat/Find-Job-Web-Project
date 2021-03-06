from django.urls import path
from .views import PositionList, PositionDetail, PositionFromCompanyList, PositionSearch

urlpatterns = [
    path('', PositionList.as_view(), name='Position_list'),
    path('search/', PositionSearch.as_view(), name='Search_Position_list'),
    path('company/<int:id>/', PositionFromCompanyList.as_view(),
         name='Position_List_from_company'),
    path('<int:pk>/', PositionDetail.as_view(), name='Position_detail'),
    # path('<int:pk>/', MatchJob.as_view(), name='Position_detail'),
]

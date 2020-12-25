from django.urls import path
from .views import PositionList, PositionDetail

urlpatterns = [
    path('', PositionList.as_view(), name='Position_list'),
    path('<int:pk>/', PositionDetail.as_view(), name='Position_detail'),
    # path('<int:pk>/', MatchJob.as_view(), name='Position_detail'),
]

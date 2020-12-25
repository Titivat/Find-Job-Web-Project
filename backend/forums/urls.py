from django.urls import path
from .views import ForumList, ForumDetail

urlpatterns = [
    path('', ForumList.as_view(), name='Forum_list'),
    path('<int:pk>/', ForumDetail.as_view(), name='Forum_detail'),
    # path('<int:pk>/Delete/', ForumDelete.as_view(), name='Forum_delete'),
]

from django.urls import path
from .views import PostList, PostDetail, PostFromSameForumList

urlpatterns = [
    path('', PostList.as_view(), name='Post_list'),
    path('/forum/<forum>', PostFromSameForumList.as_view(), name='Same_Forum_list'),
    path('<int:pk>/', PostDetail.as_view(), name='Post_detail'),
]

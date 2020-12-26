from django.urls import path
from .views import PostList, PostDetail, PostFromSameForumList
# ^forum/(?P<forum_id>\d+)/$
urlpatterns = [
    path('', PostList.as_view(), name='Post_list'),
    path('forum/<int:forum_id>', PostFromSameForumList.as_view(),
         name='Same_Forum_list'),
    # path('^(?:forum_id-(?P<forum_id>\d+)/)?$', PostFromSameForumList.as_view(),
    #      name='Same_Forum_list'),
    path('<int:pk>/', PostDetail.as_view(), name='Post_detail'),
]

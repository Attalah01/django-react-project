from django.urls import path

from .views import *

urlpatterns = [
    path('list', BlogListView.as_view()),
    path('by_category',ListPostsByCategoryView.as_view()),
    path('detail/<slug>',PostDetailView.as_view()),
    path('search', SerachBlogView.as_view()),
]
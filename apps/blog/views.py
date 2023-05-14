from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.db.models.query_utils import Q

from .models import Post, ViewCount
from apps.category.models import Category
from .serializers import PostSerializer, PostListSerializer
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination

class BlogListView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def get(self, request, format=None):
        if Post.postobjects.all().exists():
            posts = Post.postobjects.all()
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)
            
            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error': 'Post not found'}, status=status.HTTP_404_NOT_FOUND)
        
class ListPostsByCategoryView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def get(self, request, format=None):
        if Post.postobjects.all().exists():
            slug = request.query_params.get('slug')
            category = Category.objects.get(slug=slug)
            posts = Post.postobjects.order_by('-published').all()
            
            # category solo
            if not Category.objects.filter(parent=category).exists():
                posts = posts.filter(category=category)
            
            # If this parent category has children, filter by the parent category and its children
            else:
                sub_categories = Category.objects.filter(parent=category)
                filtered_categories = [category]
                
                for cat in sub_categories:
                    filtered_categories.append(cat)
                
                filtered_categories = tuple(filtered_categories)
                posts = posts.filter(category__in=filtered_categories)
            
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)

            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_404_NOT_FOUND)
        
class PostDetailView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def get(self, request, slug, format=None):
        if Post.postobjects.filter(slug=slug).exists():
            post = Post.postobjects.get(slug=slug)
            serializer = PostSerializer(post)
            address = request.META.get('HTTP_X_FORWARDED_FOR')
            
            if address:
                ip = address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')
            
            if not ViewCount.objects.filter(post=post, ip_address=ip):
                view = ViewCount(post=post, ip_address=ip)
                view.save()
                post.views += 1
                post.save()
            
            return Response({'post':serializer.data}, status=status.HTTP_200_OK)
        
        else:
            return Response({'error': 'Post doesnt exist'}, status=status.HTTP_404_NOT_FOUND)
        
class SerachBlogView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        
        search_term = request.query_params.get('s')
        matches = Post.postobjects.filter(
            Q(title__icontains=search_term) |
            Q(description__icontains=search_term) |
            Q(content__icontains=search_term) |
            Q(category__name__icontains=search_term)
        )
        
        paginator = SmallSetPagination()
        results = paginator.paginate_queryset(matches, request)

        serializer = PostListSerializer(results, many=True)
        return paginator.get_paginated_response({'filtered_posts': serializer.data})
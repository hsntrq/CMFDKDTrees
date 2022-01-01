from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

app_name = 'reactui'

urlpatterns = [
    path('', views.index),
    path('home/', views.index),
    path('about/', views.index),
    path('cmfd/', views.index),    
    path('art/', views.index),
    path('kdtrees/', views.index),
    path('pictures/', views.index)
]

urlpatterns = format_suffix_patterns(urlpatterns)

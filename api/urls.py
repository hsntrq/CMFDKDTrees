from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

app_name = 'api'

urlpatterns = [
    path('entries/', views.EntriesView.as_view(), name='entries'),
    path('submit/', views.CreateEntry.as_view(), name='submit')
    ]

urlpatterns = format_suffix_patterns(urlpatterns)

#!/usr/bin/env python3
# 2023-01-07, Michael Schuchowski

from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('register', views.register_request, name='register')
]

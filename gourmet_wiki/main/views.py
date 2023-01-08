#!/usr/bin/env python3
# 2023-01-07, Michael Schuchowski

from django.shortcuts import render


def home(request):
    return render(request, 'pages/home.html')

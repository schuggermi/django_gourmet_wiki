#!/usr/bin/env python3
# 2023-01-07, Michael Schuchowski

from django.contrib import messages
from django.contrib.auth import login
from django.shortcuts import render, redirect
from .forms import NewUserForm


def home(request):
    return render(request, 'main/pages/home.html')


def register_request(request):
    if request.method == "POST":
        form = NewUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "Registration successful.")
            return redirect("home")
        messages.error(request, "Unsuccessful registration. Invalid information.")
    form = NewUserForm()
    return render(request=request, template_name="main/pages/register.html", context={"register_form": form})

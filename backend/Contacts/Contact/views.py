from django.shortcuts import render # type: ignore
from rest_framework import viewsets # type: ignore
from .models import Contact # type: ignore
from .serializers import ContactSeializer # type: ignore
# Create your views here.

class ContactViewSet(viewsets.ModelViewSet):#type: ignore
    queryset = Contact.objects.all().order_by("-created_at")
    serializer_class = ContactSeializer # type: ignore
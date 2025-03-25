from rest_framework import serializers # type: ignore
from .models import Contact # type: ignore

class ContactSeializer(serializers.ModelSerializer): # type: ignore
    class Meta:
        model = Contact
        fields = "__all__"
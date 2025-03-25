from django.urls import path, include # type: ignore
from rest_framework.routers import DefaultRouter # type: ignore
from .views import ContactViewSet # type: ignore

router = DefaultRouter() # type: ignore
router.register(r"contacts", ContactViewSet) # type: ignore

urlpatterns = [
    path("",include(router.urls)) # type: ignore
]
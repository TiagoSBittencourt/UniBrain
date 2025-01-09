from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *
from .views import PerfilUpdate

router = DefaultRouter()
router.register('register', RegisterViewSet, basename='register')
router.register('login', LoginViewSet, basename='login')
urlpatterns = router.urls
path('atualizer-dados',PerfilUpdate.as_view(), name='atualizar-dados'),
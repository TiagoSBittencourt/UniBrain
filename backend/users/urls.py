from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *
from .views import UserUpdate

router = DefaultRouter()
router.register('register', RegisterViewSet, basename='register')
router.register('login', LoginViewSet, basename='login')
urlpatterns = [
path('atualizar-dados',UserUpdate.as_view(), name='atualizar-dados'),
    ]
urlpatterns += router.urls

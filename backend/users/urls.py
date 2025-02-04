from django.contrib import admin
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register('register', RegisterViewSet, basename='register')
router.register('login', LoginViewSet, basename='login')
router.register('atualizar-dados',UserUpdateViewSet,basename='atualizar-dados')

urlpatterns=[
    path('api/',include(router.urls)),
]
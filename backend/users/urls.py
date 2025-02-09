from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register('register', RegisterViewSet, basename='register')
router.register('login', LoginViewSet, basename='login')

urlpatterns = [
    path('update-questoes/', AtualizarProgressoMateria.as_view(), name='atualizar-progresso'),
    path('profile/update/', ProfileUpdateView.as_view(), name='profile-update'),
    path("profile/get/", ProfileDetailView.as_view(), name="user-profile"),
]   

urlpatterns += router.urls
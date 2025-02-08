from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import AuthUser, Materia, Profile

# Chatgpt (Review)
class CustomUserAdmin(UserAdmin):
    model = AuthUser
    list_display = ['email', 'username', 'is_staff', 'is_active']
    search_fields = ['email', 'username']
    ordering = ['email']

admin.site.register(Profile)

admin.site.register(AuthUser, CustomUserAdmin)

admin.site.register(Materia)
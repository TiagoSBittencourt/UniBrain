from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin 
from django.contrib.auth.base_user import BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field is required")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)


class AuthUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=200, unique=True)
    email = models.EmailField(max_length=200, unique=True)
    birthday = models.DateField(null=True, blank=True)
    degree = models.CharField(max_length=100, null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)  # Required by Django's auth system
    is_staff = models.BooleanField(default=False)  # Required for admin permissions

    USERNAME_FIELD = "username"
    REQUIRED_FIELDS = ["email"]  # Username and password is alredy required as default

    objects = CustomUserManager() # Verify and handle the user creation

    def __str__(self):
        return self.username
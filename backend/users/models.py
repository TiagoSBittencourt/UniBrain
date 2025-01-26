from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin 
from django.contrib.auth.base_user import BaseUserManager

# Password reset -> email validation
from django_rest_passwordreset.signals import reset_password_token_created # type: ignore
from django.dispatch import receiver
from django.urls import reverse
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from django.utils.html import strip_tags

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field is required")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        if password:
            user.set_password(password)  # Garante que a senha seja criptografada
        else:
            raise ValueError("Password cannot be None")
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)


class AuthUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=200)
    email = models.EmailField(max_length=200, unique=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)  # Required by Django's auth system
    is_staff = models.BooleanField(default=False)  # Required for admin permissions

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []  # Username and password is alredy required as default

    objects = CustomUserManager() # Verify and handle the user creation

    def __str__(self):
        return self.username


@receiver(reset_password_token_created)
def password_reset_token_created(reset_password_token, *args, **kwargs):
    sitelink = "http://localhost:5173/"
    token = "{}".format(reset_password_token.key) # Send the new token via url to the frontend
    full_link = str(sitelink)+str("password-reset/")+str(token)

    print(full_link)
    print(token)

    # Pass to html more easy
    context = {
        "full_link": full_link
    }

    html_message = render_to_string("backend/email.html", context=context)

    plain_message = strip_tags(html_message) # Remove html tags

    msg = EmailMultiAlternatives(
        subject="Trocar Senha - UniBrain",
        body=plain_message,
        from_email = "suporteunibrain@gmail.com",
        to = [reset_password_token.user.email]
    )

    msg.attach_alternative(html_message, "text/html")
    msg.send()
    
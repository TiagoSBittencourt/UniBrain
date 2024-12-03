from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .serializers import *
from .models import *
from django.contrib.auth import get_user_model

User = get_user_model() # Reference the defined User Structure in models.py

class RegisterViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = RegisterSerializers

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201) # Not include the pass info by default as defined in serializer (write_only)
        else:
            return Response(serializer.errors, status=400)
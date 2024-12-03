from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model

User = get_user_model() # Reference the defined User Structure in models.py

class RegisterSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'username')
        extra_kwargs = {'password': {'write_only':True}} # Limit to only write (do not see password using GET/POST)

    # Hashed password
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data) # import from .models
        return user
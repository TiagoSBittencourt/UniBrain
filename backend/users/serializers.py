from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model

User = get_user_model() # Reference the defined User Structure in models.py

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret.pop('password', None) # password is not visible
        return ret 


class RegisterSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only':True}} # Limit to only write (do not see password using GET/POST)

    # Hashed password
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data) # import from .models
        return user
    

class ProgressoMateriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgressoMateria
        fields = ['user', 'materia', 'idQuestoesFeitas']
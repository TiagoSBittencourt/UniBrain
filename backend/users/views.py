from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .serializers import *
from .models import *
from django.contrib.auth import get_user_model, authenticate
from knox.models import AuthToken


User = get_user_model() # Reference the defined User Structure in models.py


class LoginViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = LoginSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']

            user = authenticate(request, email=email, password=password)

            if user: # if is in db
                _, token = AuthToken.objects.create(user) # tupple
                return Response(
                    {
                        "user": self.serializer_class(user).data,
                        "token": token
                    }
                )
            else:
                return Response({"error": "invalid credentials"}, status=401)
        else:
            return Response(serializer.errors, status=400)


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
        

from rest_framework import permissions
from django.shortcuts import get_object_or_404
from .models import ProgressoMateria, Materia
from .serializers import ProgressoMateriaSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth import get_user_model


class AtualizarProgressoMateria(APIView):
    permission_classes = [permissions.IsAuthenticated]  # Permite apenas usuários autenticados

    def post(self, request, *args, **kwargs):
        titulo = request.data.get('titulo')
        idQuestoesFeitas = request.data.get('idQuestoesFeitas')  # Espera uma lista de IDs ou índices de questões

        if not titulo or not idQuestoesFeitas:
            return Response({"detail": "Dados incompletos"}, status=status.HTTP_400_BAD_REQUEST)

        # Obtém a matéria
        materia = get_object_or_404(Materia, titulo=titulo)

        # Tenta encontrar ou criar o progresso existente do usuário nessa matéria
        progresso, created = ProgressoMateria.objects.get_or_create(
            user=request.user,  # Atribui o usuário logado
            materia=materia,
        )

        # Atualiza as questões concluídas
        progresso.idQuestoesFeitas = idQuestoesFeitas
        progresso.save()

        # Retorna a resposta de sucesso
        return Response(ProgressoMateriaSerializer(progresso).data, status=status.HTTP_200_OK)
    
class ProfileUpdateView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def put(self, request):
        user = request.user
        user_serializer = UserUpdateSerializer(user, data=request.data.get("user"), partial=True)
        profile_serializer = ProfileUpdateSerializer(user.profile, data=request.data.get("profile"), partial=True)

        if user_serializer.is_valid() and profile_serializer.is_valid():
            user_serializer.save()
            profile_serializer.save()
            return Response({"user": user_serializer.data, "profile": profile_serializer.data}, status=status.HTTP_200_OK)
        
        return Response({"errors": user_serializer.errors | profile_serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
class ProfileDetailView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        user_serializer = UserUpdateSerializer(user)
        profile_serializer = ProfileUpdateSerializer(user.profile)

        return Response({"user": user_serializer.data, "profile": profile_serializer.data}, status=status.HTTP_200_OK)
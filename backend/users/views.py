from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .serializers import *
from .models import *
from django.contrib.auth import get_user_model, authenticate
from knox.models import AuthToken
from django.views.generic.edit import CreateView, UpdateView
from django.urls import reverse_lazy
from django.shortcuts import get_object_or_404


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
        





#Editar os dados do perfil do usuário 


# class UserUpdate(UpdateView):
#     template_name = "cadastros/form.html"
#     model = AuthUser
#     fields = ["username","email",]
#     success_url = reverse_lazy("index")

#     def get_object(self, queryset = None):
#         self.object = get_object_or_404(AuthUser, username=self.request.user)
#         return self.object
    
#     def get_context_data(self,*args,**kwargs):
#         context = super().get_context_data(*args, **kwargs)
        
#         context["titulo"] = "Meus dados pessoais"
#         context["botao"] = "Atualizar"

#         return context


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import AuthUser  # Importe o modelo personalizado
from .serializers import AuthUserUpdateSerializer

class UpdateAuthUserView(APIView):
    permission_classes = [IsAuthenticated]  # Apenas usuários autenticados podem acessar

    def patch(self, request, *args, **kwargs):
        user = request.user  # Obtem o usuário autenticado (assume que o AuthUser é usado como modelo de autenticação)
        serializer = AuthUserUpdateSerializer(user, data=request.data, partial=True)  # 'partial=True' permite atualização parcial

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

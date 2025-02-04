from django.contrib import admin
from django.urls import path, include
from django.conf  import settings
from django.conf.urls.static import static
from knox import views as knox_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('users.urls')),
    path('logout/', knox_views.LogoutView.as_view(), name='knox_logout'), # Logout the device that requested
    path('logutall/', knox_views.LogoutAllView.as_view(), name='knox_logoutall'), # Logout all the devices of the account
    path('api/password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
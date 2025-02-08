from django.apps import AppConfig


class UsersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'users'
    
    # Recomended By DJANGO DOCUMENTATION
    def ready(self):
        import users.signals
# Generated by Django 5.1.2 on 2024-12-23 22:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_remove_authuser_birthday_remove_authuser_degree'),
    ]

    operations = [
        migrations.AlterField(
            model_name='authuser',
            name='username',
            field=models.CharField(max_length=200),
        ),
    ]

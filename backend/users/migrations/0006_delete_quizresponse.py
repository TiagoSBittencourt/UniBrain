# Generated by Django 5.1.4 on 2025-01-16 23:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_quizresponse'),
    ]

    operations = [
        migrations.DeleteModel(
            name='QuizResponse',
        ),
    ]

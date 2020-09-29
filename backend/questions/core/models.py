from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    username = models.CharField(('username'), max_length=30, unique=True,
        error_messages={
            'unique': ("A user with that username already exists."),
        },
        primary_key=True)

from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    username = models.CharField(('username'), max_length=30, unique=True, db_index=True,
        primary_key=True)

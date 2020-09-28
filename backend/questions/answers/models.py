from django.db import models
from django.conf import settings
from django.utils.text import slugify

class Questions(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, blank=True)
    title = models.TextField()
    created_on = models.DateTimeField(auto_now=True)
    updated_on = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField()

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Questions, self).save(*args, **kwargs)

    def __str__(self):
        return self.slug

class Answers(models.Model):
    question = models.OneToOneField(Questions, on_delete=models.CASCADE)
    answer_text = models.TextField()

    def __str__(self):
        return str(self.id)

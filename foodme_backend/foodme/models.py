from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=50)
    ingredients = models.TextField()
    directions = models.TextField(default=' ')
    created_by = models.CharField(max_length=50, default=' ')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

# class Post(models.Model):
#     title = models.CharField(max_length=50)
#     content = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

def __str__(self):
    return self.title

from django.db import models
from forums.models import Forum
from users.models import User
from django.urls import reverse


class Post(models.Model):

    issuer = models.ForeignKey(
        User, verbose_name="issuer", on_delete=models.CASCADE)
    title = models.CharField("post_title", max_length=50)
    desc = models.TextField(null=True, blank=True)
    forum = models.ForeignKey(Forum, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Post"
        verbose_name_plural = "Posts"

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("Post_detail", kwargs={"id": self.id})

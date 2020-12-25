from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _


class Forum(models.Model):
    class ForumTypes(models.TextChoices):
        ENGINEER = 'ENGINEER', 'Engineer'
        BUSINESS = 'BUSINESS', 'Business'
        DESIGN = 'DESIGN', 'Design'

    forumType = models.CharField(max_length=10,
                                 choices=ForumTypes.choices)
    desc = models.TextField(_("Forum-descriptions"), null=True, blank=True)

    class Meta:
        verbose_name = _("Forum")
        verbose_name_plural = _("Forums")

    def __str__(self):
        return self.forumType

    def get_absolute_url(self):
        return reverse("Forum_detail", kwargs={"id": self.id})

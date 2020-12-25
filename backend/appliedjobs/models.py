from django.db import models
from django.urls import reverse
from positions.models import Position
from users.models import Employee


class AppliedJob(models.Model):
    position = models.ForeignKey(
        Position, verbose_name="Job position", on_delete=models.CASCADE)
    employee = models.ForeignKey(
        Employee, verbose_name="Employee applied for a job", on_delete=models.CASCADE)
    is_accepted = models.BooleanField(default=False)
    is_rejected = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "AppliedJob"
        verbose_name_plural = "AppliedJobs"

    def __str__(self):
        return "employee:" + str(self.employee.name) + "Applied for:" + str(self.position)

    def get_absolute_url(self):
        return reverse("AppliedJob_detail", kwargs={"pk": self.pk})

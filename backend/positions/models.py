from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from users.models import User, Employee, Company
from django.contrib.postgres.fields.array import ArrayField


class Position(models.Model):

    title = models.CharField(_("Position Title name"),
                             max_length=200, null=False, blank=False)
    desc = models.TextField(_("Position description"), null=True, blank=True)
    BASE_SENORITY = Employee.SenorityType.ENTRY
    senority = models.CharField(_("Senority"), max_length=10,
                                choices=Employee.SenorityType.choices, default=BASE_SENORITY)

    class JobType(models.TextChoices):
        FULL_TIME = 'FULL', 'Full-time'
        CONTRACT = 'CONTRACT', 'Contract'
        INTERN = 'INTERN', 'Internship'
        PART_TIME = 'PART_TIME', 'Part-time'
        TEMP = 'TEMP', 'Temporary'

    BASE_JOB_TYPE = JobType.FULL_TIME
    jobtype = models.CharField(_("Job-type"), max_length=10,
                               choices=JobType.choices, default=BASE_JOB_TYPE)

    neededSkills = ArrayField(base_field=models.CharField(
        _("Skill-tags"), max_length=200), blank=True, null=True)
    industry = models.CharField(_("Industry"), max_length=50)
    company = models.ForeignKey(Company, verbose_name=_(
        "company-posted-job"), on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = _("Position")
        verbose_name_plural = _("Positions")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("Position_detail", kwargs={"id": self.id})

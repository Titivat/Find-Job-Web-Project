# users/model.py
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.db import models
from django.urls import reverse
from django.contrib.postgres.fields.array import ArrayField


class User(AbstractUser):
    class Types(models.TextChoices):
        EMPLOYEE = "EMPLOYEE", "Employee"
        COMPANY = "COMPANY", "Company"

    BASE_USER_TYPE = Types.EMPLOYEE
    type = models.CharField(max_length=10,
                            choices=Types.choices, default=BASE_USER_TYPE)
    name = models.CharField(max_length=200, blank=False, null=False)
    email = models.EmailField(max_length=254, unique=True)
    city = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.username

    def get_absolute_url(self):
        return reverse("User_detail", kwargs={"id": self.id})


class EmployeeManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(user__type="EMPLOYEE")


class Employee(models.Model):
    class SenorityType(models.TextChoices):
        INTERN = 'INTERN', 'Internship'
        ENTRY = 'ENTRY', 'Entry-Level'
        ASSOCIATE = 'ASSOCIATE', 'Associate'
        SENIOR = 'SENIOR', 'Senior'
        DIRECTOR = 'DIRECTOR', 'Director'

    user = models.OneToOneField(
        User, verbose_name=_("user"), on_delete=models.CASCADE)
    senority = models.CharField(_("Senority"), max_length=10,
                                choices=SenorityType.choices, default=SenorityType.INTERN, blank=True, null=True)
    industry = models.CharField(
        _("Industry"), max_length=50, blank=True, null=True)
    skills = ArrayField(base_field=models.CharField(
        _("Skill-tags"), max_length=200), blank=True, null=True)
    objects = EmployeeManager()

    class Meta:
        verbose_name = _("Employee")
        verbose_name_plural = _("Employees")

    def __str__(self):
        return self.user.username

    def save(self, *args, **kwargs):
        if not self.pk:
            self.type = User.Types.EMPLOYEE
        return super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse("Employee_detail", kwargs={"pk": self.pk})


# class EmployeeMore(models.Model):
#     class SenorityType(models.TextChoices):
#         INTERN = 'INTERN', 'Internship'
#         ENTRY = 'ENTRY', 'Entry-Level'
#         ASSOCIATE = 'ASSOCIATE', 'Associate'
#         SENIOR = 'SENIOR', 'Senior'
#         DIRECTOR = 'DIRECTOR', 'Director'

#     surname = models.CharField(max_length=200, blank=False, null=False)
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     senority = models.CharField(_("Senority"), max_length=10,
#                                 choices=SenorityType.choices, default=SenorityType.INTERN)
#     industry = models.CharField(_("Industry"), max_length=50)
#     skills = ArrayField(base_field=models.CharField(
#         _("Skill-tags"), max_length=200), blank=True, null=True)


# class Employee(User):
#     BASE_USER_TYPE = User.Types.EMPLOYEE
#     objects = EmployeeManager()

#     @property
#     def more(self):
#         return self.employeemore

#     class Meta:
#         proxy = True

#     def save(self, *args, **kwargs):
#         if not self.pk:
#             self.type = User.Types.EMPLOYEE
#         return super().save(*args, **kwargs)


class CompanyManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(user__type="COMPANY")


class Company(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    desc = models.TextField(
        _("description of the company"), null=True, blank=True)
    address_line = models.TextField(
        _("company address"), null=True, blank=True)
    logo = models.ImageField(
        _("company-logo"), upload_to='images/', blank=True)
    objects = CompanyManager()

    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"

    def __str__(self):
        return self.user.username

    def save(self, *args, **kwargs):
        if not self.pk:
            self.type = User.Types.COMPANY
        return super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse("Company_detail", kwargs={"pk": self.pk})


# class CompanyMore(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     desc = models.TextField(
#         _("description of the company"), null=True, blank=True)
#     address_line = models.TextField(
#         _("company address"), null=True, blank=True)
#     logo = models.ImageField(
#         _("company-logo"), upload_to='images/', blank=True)


# class Company(User):
#     BASE_USER_TYPE = User.Types.COMPANY
#     objects = CompanyManager()

#     @property
#     def more(self):
#         return self.cinpanymore

#     class Meta:
#         proxy = True

#     def save(self, *args, **kwargs):
#         if not self.pk:
#             self.type = User.Types.COMPANY
#         return super().save(*args, **kwargs)

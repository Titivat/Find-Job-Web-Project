from django.contrib import admin

from .models import Company, Employee, User

admin.site.register(User)
admin.site.register(Company)
admin.site.register(Employee)

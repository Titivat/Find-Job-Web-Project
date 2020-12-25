from rest_framework import serializers, exceptions
from .models import User, Employee, Company
from django.contrib.auth import authenticate


class UserEMSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'name', 'last_name',  'email',
                  'is_staff', 'is_active', 'date_joined',
                  'is_superuser', 'city', 'type', )


class UserCOMSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'name', 'email',
                  'is_staff', 'is_active', 'date_joined',
                  'is_superuser', 'city', 'type', )


class EmployeeSerializer(serializers.ModelSerializer):
    user = UserEMSerializer()

    class Meta:
        model = Employee
        fields = ('id', 'user', 'senority', 'industry', 'skills',)


class CompanySerializer(serializers.ModelSerializer):
    user = UserCOMSerializer()

    class Meta:
        model = Company
        fields = ('id', 'user', 'desc', 'address_line', 'logo',)


# class LoginSerializer(serializers.Serializer):
#     username = serializers.CharField()
#     password = serializers.CharField()

#     def validate(self, data):
#         username = data.get("username", "")
#         password = data.get("password", "")

#         if username and password:
#             user = authenticate(username=username, password=password)
#             if user:
#                 if user.is_active:
#                     data["user"] = user
#                 else:
#                     msg = "User is deactivated."
#                     raise exceptions.ValidationError(msg)
#             else:
#                 msg = "Unable to login with given credentials."
#                 raise exceptions.ValidationError(msg)
#         else:
#             msg = "Must provide username and password both."
#             raise exceptions.ValidationError(msg)
#         return data

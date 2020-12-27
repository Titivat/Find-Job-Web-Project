from rest_framework import serializers, exceptions
from .models import User, Employee, Company
from django.contrib.auth import authenticate

from positions.models import Position


class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'type',)


class UserEMSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'name', 'last_name',  'email',
                  'city', 'type', )


class UserCOMSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'name', 'email',
                  'city', 'type', )


class EmployeeSerializer(serializers.ModelSerializer):
    user = UserEMSerializer()

    class Meta:
        model = Employee
        fields = ('id', 'user', 'senority', 'industry', 'skills', 'document')

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create(**user_data)
        validated_data['user'] = user
        employee = Employee.objects.create(**validated_data)

        return employee

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user')
        user = instance.user

        # user
        user.id = validated_data.get('id', user.id)
        user.username = validated_data.get('username', user.username)
        user.name = validated_data.get('name', user.name)
        user.last_name = validated_data.get('last_name', user.last_name)
        user.email = validated_data.get('email', user.email)
        user.city = validated_data.get('city', user.city)
        user.type = validated_data.get('type', user.type)
        user.save()

        # Employee data
        instance.id = validated_data.get('id', instance.id)
        instance.senority = validated_data.get('senority', instance.senority)
        instance.industry = validated_data.get('industry', instance.industry)
        instance.skills = validated_data.get('skills', instance.skills)
        instance.document = validated_data.get('document', instance.document)
        instance.save()

        return instance


class CompanySerializer(serializers.ModelSerializer):
    user = UserCOMSerializer()

    class Meta:
        model = Company
        fields = ('id', 'user', 'desc', 'address_line', 'logo',)

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create(**user_data)
        validated_data['user'] = user
        company = Company.objects.create(**validated_data)

        return company

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


class CityListSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('city', )


class JobTypeListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Position
        fields = ('jobtype', )

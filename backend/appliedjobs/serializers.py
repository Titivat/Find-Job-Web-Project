from rest_framework import serializers
from .models import AppliedJob
from positions.serializers import PositionSerializer
from users.serializers import EmployeeSerializer


class AppliedJobEmployeeViewSerializer(serializers.ModelSerializer):
    position = PositionSerializer()

    class Meta:
        model = AppliedJob

        fields = ('id', 'position', 'employee', 'is_accepted', 'is_rejected',
                  'created_at',)


class AppliedJobCompanyViewSerializer(serializers.ModelSerializer):
    employee = EmployeeSerializer()

    class Meta:
        model = AppliedJob

        fields = ('id', 'position', 'employee', 'is_accepted', 'is_rejected',
                  'created_at',)


class AppliedJobSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppliedJob

        fields = ('id', 'position', 'employee', 'is_accepted', 'is_rejected',
                  'created_at',)

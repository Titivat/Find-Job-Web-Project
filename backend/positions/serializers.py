from rest_framework import serializers
from .models import Position
from users.serializers import CompanySerializer


class PositionSerializer(serializers.ModelSerializer):
    company = CompanySerializer()

    class Meta:
        model = Position

        fields = ('id', 'title', 'desc', 'senority', 'jobtype',
                  'neededSkills', 'industry', 'company', 'created_at', 'updated_at',)

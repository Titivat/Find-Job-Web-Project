from rest_framework import serializers
from .models import Position


class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Position

        fields = ('id', 'title', 'desc', 'senority', 'jobtype',
                  'neededSkills', 'industry', 'company', 'created_at', 'updated_at',)

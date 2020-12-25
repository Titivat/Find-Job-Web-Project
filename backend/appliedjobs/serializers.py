from rest_framework import serializers
from .models import AppliedJob


class AppliedJobSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppliedJob

        fields = ('id', 'position', 'employee', 'is_accepted', 'is_rejected',
                  'created_at',)

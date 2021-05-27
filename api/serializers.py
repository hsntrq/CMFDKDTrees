from rest_framework import serializers
from . import models

class EntryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Entry
        fields = [
            'timeCreated',
            'imageInput',
            'imageOutput',
            'alpha',
            'blockSize',
            'tm'
        ]

class CreateEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Entry
        fields = [
            'imageInput',
            'imageOutput',
            'alpha',
            'blockSize',
            'tm'
        ]
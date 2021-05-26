from django.db import models
import datetime


class Entry(models.Model):
    timeCreated = models.DateTimeField(default=datetime.datetime.now)
    imageInput = models.ImageField(upload_to='input/', blank=True, null=True)
    imageOutput = models.ImageField(upload_to='output/', blank=True, null=True)
    alpha = models.IntegerField(default=10)
    blockSize = models.IntegerField(default=9)
    tm = models.DecimalField(decimal_places=5, max_digits=6, default=0.001)

    def __str__(self):
        return str(self.timeCreated)

    class Meta:
        ordering = ["-timeCreated"]

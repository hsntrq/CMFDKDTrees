from django.db import models
import datetime
import main


class Entry(models.Model):
    timeCreated = models.DateTimeField(default=datetime.datetime.now)
    imageInput = models.ImageField(upload_to='input/', blank=True, null=True)
    imageOutput = models.ImageField(upload_to='output/', blank=True, null=True)
    alpha = models.IntegerField(default=9)
    blockSize = models.IntegerField(default=15)
    tm = models.DecimalField(decimal_places=5, max_digits=6, default=0.001)

    def __str__(self):
        return str(self.timeCreated)

    def save(self, *args, **kwargs):
        super(Entry, self).save(*args, **kwargs)
        if not self.imageOutput and self.imageInput:
            self.imageOutput = main.detectForgery(self.imageInput, self.blockSize, self.tm, self.alpha)
            super(Entry, self).save()

    class Meta:
        ordering = ["-timeCreated"]

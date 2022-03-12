from django.db import models

# Create your models here.
class JaiPortfolioForm(models.Model):
    name = models.CharField(max_length=40)
    email = models.EmailField()
    subject = models.CharField(max_length=50)
    description = models.TextField(max_length=500)

    def __str__(self):
        return "Name: " + str(self.name) + " | Subject: "+ str(self.subject)

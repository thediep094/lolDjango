
from django.db import models

# Create your models here.
class Order(models.Model):
    account = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    itemId = models.CharField(max_length=200)
    itemType = models.CharField(max_length=200)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    @property
    def itemURL(self):
        try:
            url = 'http://127.0.0.1:' + self.itemType + '/' + self.itemId + '/'
        except:
            url = ''
        return url
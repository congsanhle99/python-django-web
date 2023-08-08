from django.contrib import admin
from django.urls import path
from . import views
app_name = "app"
urlpatterns = [
    path('', views.home, name="home"),
    path('checkout/', views.checkout, name="checkout"),
    path('cart/', views.cart, name="cart"),
    path('update_item', views.updateItem, name="update_item"),
]

from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def hello (request): 
    x = calculate()
    return render(request, "hello.html",{"name":"asd"})

def calculate():  
    x= 1
    y = 2
    return x
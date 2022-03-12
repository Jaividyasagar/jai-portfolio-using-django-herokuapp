from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import JaiPortfolioForm

# Create your views here.
def index(request):
    return render(request,'index.html');

def portfolio(request):
    return render(request,'index.html');
def workout(request):
    return render(request,'workout.html');

def response(request):
    try:
        if request.method == 'POST':
            name = request.POST.get('name')
            email = request.POST.get('email')
            subject = request.POST.get('subject')
            description = request.POST.get('description')
            JaiPortfolioForm(name=name,email=email,subject=subject,description=description).save()
            return render(request,'response.html',{'name':name})
        else:
            return HttpResponse("Sorry! no response")
    except Exception as e:
        return HttpResponse(e)
def inbox(request):
    messages = JaiPortfolioForm.objects.all()
    return render(request,'inbox.html',{'messages':messages})

def delete(request,id):
    message = JaiPortfolioForm.objects.get(id=id)
    message.delete()
    return redirect('/inbox/')

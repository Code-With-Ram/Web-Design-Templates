from django.shortcuts import render,redirect
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
import time
# Create your views here.
import threading

perc = 0

def work():
    time.sleep(0.2)   
def do_work():
    global perc,t,home
    for i in range(200):
        work()
        perc += 0.2
        print(perc," completed")        
    print("Done")
    perc=100

@csrf_exempt
def bg_work(request):
    if request.method == 'POST':
        t = threading.Thread(target=do_work)
        t.start()
    return JsonResponse({'status': 'Processing...', 'pro': perc})

@csrf_exempt
def index(request):
    global perc
    if perc ==100:
        print("Doing it")
        perc = 0
        return render(request,'home/index.html',context={"done":'Done'})
    else:
        return render(request,'home/index.html',context={"done":'Not Done'})

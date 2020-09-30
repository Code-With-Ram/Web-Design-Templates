from django.urls import path
from django.conf.urls import url
from home import views
urlpatterns = [
    
    url(r'^bgtask/$', views.bg_work, name='bgtask'),
    url(r'^home/$', views.index, name='home'),   # likepost view at /likepost

      
    url(r'^$', views.index, name='home'),  # index view at /

    #path('home',views.index,name="home"),    
    #path('s',views.index,name="s"),    

    #path('',views.index),    
]
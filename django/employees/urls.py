from django.urls import include, path
from employees import views


urlpatterns = [
    path('employee/<int:pk>', views.employee_detail),
    path('employee', views.employee_body),
]

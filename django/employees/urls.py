from django.urls import include, path
from employees import views


urlpatterns = [
    path('employee/<int:id>/', views.employee_detail),
    path('employee/<int:id>/', views.employee_body),
    path('employee/<int:id>/', views.employee_detail),
    path('employee/<int:id>/', views.employee_detail),
]

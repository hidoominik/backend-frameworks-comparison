from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from employees.models import Employee
from employees.models import Salary
from employees.serializers import EmployeeSerializer
from employees.serializers import SalarySerializer
from rest_framework.decorators import api_view


@api_view(['POST'])
def employee_body(request):
    if request.method == 'POST':
        employee_data = JSONParser().parse(request)
        employee_serializer = EmployeeSerializer(data=employee_data)
    if employee_serializer.is_valid():
        employee_serializer.save()
        return JsonResponse(employee_serializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(employee_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def employee_detail(request, pk):
    try:
        employee = Employee.objects.get(pk=pk)
        if request.method == 'GET':
            employee_serializer = EmployeeSerializer(employee)
            return JsonResponse(employee_serializer.data)
        elif request.method == 'PUT':
            employee_data = JSONParser().parse(request)
            employee_serializer = EmployeeSerializer(employee, data=employee_data)
            if employee_serializer.is_valid():
                employee_serializer.save()
                return JsonResponse(employee_serializer.data)
            return JsonResponse(employee_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE':
            employee.delete()
            return JsonResponse({'message': 'Employee was deleted successfully!'}, status=status.HTTP_200_OK)
    except Employee.DoesNotExist:
        return JsonResponse({'message': 'The employee does not exist'}, status=status.HTTP_404_NOT_FOUND)

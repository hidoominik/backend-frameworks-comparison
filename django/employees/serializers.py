from rest_framework import serializers
from employees.models import Employee
from employees.models import Salary


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('emp_no',
                  'birth_date',
                  'first_name',
                  'last_name',
                  'gender',
                  'hire_date')

class SalarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Salary
        fields = ('emp_no',
                  'salary',
                  'from_date',
                  'to_date')

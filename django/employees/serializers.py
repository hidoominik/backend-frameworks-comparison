from rest_framework import serializers
from employees.models import Employee
from employees.models import Salary


class SalarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Salary
        fields = ('salary',
                  'from_date',
                  'to_date')


class EmployeeSerializer(serializers.ModelSerializer):
    salaries = SalarySerializer(many=True, read_only=True)

    class Meta:
        model = Employee
        fields = ('emp_no',
                  'birth_date',
                  'first_name',
                  'last_name',
                  'gender',
                  'hire_date',
                  'salaries')

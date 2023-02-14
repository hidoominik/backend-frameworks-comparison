from django.db import models


class Employee(models.Model):
    emp_no = models.AutoField(primary_key=True, db_column='emp_no')
    birth_date = models.DateField()
    first_name = models.CharField(max_length=14)
    last_name = models.CharField(max_length=16)
    gender = models.CharField(max_length=1)
    hire_date = models.DateField()

    class Meta:
        managed = False
        db_table = 'employees'


class Salary(models.Model):
    emp_no = models.ForeignKey(Employee, on_delete=models.CASCADE, related_name='salaries', db_column='emp_no',
                               unique=True)
    salary = models.IntegerField()
    from_date = models.DateField(primary_key=True)
    to_date = models.DateField()

    class Meta:
        managed = False
        db_table = 'salaries'
        unique_together = (('emp_no', 'from_date'),)

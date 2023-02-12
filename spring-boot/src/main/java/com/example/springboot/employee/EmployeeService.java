package com.example.springboot.employee;

import java.util.Optional;

public interface EmployeeService {

    Employee saveOne(Employee employee);
    Employee updateOne(Employee updatedEmployee, Employee employeeUpdatedData);
    Optional<Employee> getOneById(int id);
    void deleteOne(Employee employee);
}

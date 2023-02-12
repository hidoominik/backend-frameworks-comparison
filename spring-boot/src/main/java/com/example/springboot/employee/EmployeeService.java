package com.example.springboot.employee;

import java.util.Optional;

public interface EmployeeService {

    Optional<Employee> getOneById(int id);
}

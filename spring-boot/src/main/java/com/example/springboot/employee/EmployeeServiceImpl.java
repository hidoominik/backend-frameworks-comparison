package com.example.springboot.employee;

import com.example.springboot.salary.SalaryService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final SalaryService salaryService;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository, SalaryService salaryService) {
        this.employeeRepository = employeeRepository;
        this.salaryService = salaryService;
    }

    @Override
    public Employee saveOne(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Employee updateOne(Employee updatedEmployee, Employee employeeUpdatedData) {
        updatedEmployee.setBirthDate(employeeUpdatedData.getBirthDate());
        updatedEmployee.setFirstName(employeeUpdatedData.getFirstName());
        updatedEmployee.setLastName(employeeUpdatedData.getLastName());
        updatedEmployee.setGender(employeeUpdatedData.getGender());
        updatedEmployee.setHireDate(employeeUpdatedData.getHireDate());

        return employeeRepository.save(updatedEmployee);
    }

    @Override
    public Optional<Employee> getOneById(int id) {
        return employeeRepository.findById(id);
    }

    @Transactional
    @Override
    public void deleteOne(Employee employee) {
        employee.getSalarySet().forEach(salaryService::deleteOne);
        employeeRepository.delete(employee);
    }
}

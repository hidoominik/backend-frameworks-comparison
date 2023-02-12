package com.example.springboot.employee;

import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/employee")
    public ResponseEntity<?> create(@RequestBody Employee employee) {

        return ResponseEntity.ok(employeeService.saveOne(employee));
    }

    @GetMapping("/employee/{id}")
    public ResponseEntity<?> get(@PathVariable int id) {

        return ResponseEntity.ok(employeeService.getOneById(id).orElseThrow(RuntimeException::new));
    }

    @PutMapping("/employee/{id}")
    public ResponseEntity<?> update(@PathVariable int id, @RequestBody Employee employeeUpdatedData) {

        return ResponseEntity.ok(employeeService.updateOne(
                employeeService.getOneById(id).orElseThrow(RuntimeException::new),
                employeeUpdatedData));
    }

    @Transactional
    @DeleteMapping("/employee/{id}")
    public ResponseEntity<?> delete(@PathVariable int id) {
        employeeService.deleteOne(employeeService.getOneById(id).orElseThrow(RuntimeException::new));

        return ResponseEntity.ok("Employee data was successfully deleted!");
    }
}

package com.example.springboot.salary;

import com.example.springboot.employee.Employee;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class SalaryId implements Serializable {

    @ManyToOne
    @JoinColumn(name = "emp_no")
    private Employee employee;

    private LocalDateTime fromDate;
}

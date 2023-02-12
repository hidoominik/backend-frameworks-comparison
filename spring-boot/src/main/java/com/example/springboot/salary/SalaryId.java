package com.example.springboot.salary;

import com.example.springboot.employee.Employee;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Embeddable
public class SalaryId implements Serializable {

    @ManyToOne
    @JoinColumn(name = "emp_no")
    private Employee employee;

    private LocalDate fromDate;
}

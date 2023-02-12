package com.example.springboot.salary;

import com.example.springboot.employee.Employee;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "salaries")
@IdClass(SalaryId.class)
public class Salary {

    @Id
    @Column(name = "from_date", length = 4)
    private LocalDate fromDate;

    @Column(name = "salary")
    private int salary;

    @Column(name = "to_date")
    private LocalDate toDate;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "emp_no", referencedColumnName="emp_no")
    private Employee employee;
}

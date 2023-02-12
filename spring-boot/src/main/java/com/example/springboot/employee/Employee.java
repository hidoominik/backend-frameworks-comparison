package com.example.springboot.employee;

import com.example.springboot.salary.Salary;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "emp_no")
    private int id;

    @Column(name = "birth_date", nullable = false)
    private LocalDateTime birthDate;

    @Column(name = "first_name", nullable = false, length = 14)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 16)
    private String lastName;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender")
    private Gender gender;

    @Column(name = "hire_date", nullable = false)
    private LocalDateTime hireDate;

//    @JsonIgnore
    @OneToMany(mappedBy="employee", cascade = CascadeType.ALL)
    private Set<Salary> salarySet = new HashSet<>();

    public void addSalary(Salary salary) {
        salarySet.add(salary);
        salary.setEmployee(this);
    }
}

"use strict";
const employees = [
    {
        id: 11,
        name: "Sarah",
        department: "Finance",
        salary: 3000,
        age: 28,
        inActive: true,
    },
    {
        id: 12,
        name: "Michael",
        department: "IT",
        salary: 4000,
        age: 35,
        inActive: false,
    },
    {
        id: 13,
        name: "Jessica",
        department: "Marketing",
        salary: 2500,
        age: 29,
        inActive: true,
    },
    {
        id: 14,
        name: "James",
        department: "Sales",
        salary: 3200,
        age: 31,
        inActive: false,
    },
    {
        id: 15,
        name: "Emily",
        department: "HR",
        salary: 2700,
        age: 26,
        inActive: true,
    },
    {
        id: 16,
        name: "Robert",
        department: "Finance",
        salary: 3500,
        age: 40,
        inActive: false,
    },
    {
        id: 17,
        name: "Olivia",
        department: "IT",
        salary: 4100,
        age: 33,
        inActive: true,
    },
    {
        id: 18,
        name: "William",
        department: "Marketing",
        salary: 2300,
        age: 30,
        inActive: false,
    },
    {
        id: 19,
        name: "Sophia",
        department: "Sales",
        salary: 2900,
        age: 27,
        inActive: true,
    },
    {
        id: 20,
        name: "Ethan",
        department: "HR",
        salary: 3100,
        age: 34,
        inActive: false,
    },
];
// console.log(employees[0]);
const getEmployeeById = (id) => {
    return employees.find((employee) => employee.id === id);
};
// console.log(getEmployeeById(20));
const listEmployeeByDepartment = (dept, age) => {
    return employees
        .filter((employee) => employee.department === dept)
        .filter((employee) => employee.age >= age);
};
// console.log(listEmployeeByDepartment("Sales",30));
const totalActiveSalaryEmployee = () => {
    return employees.filter((employee) => employee.inActive)
        .reduce((sum, employee) => sum + employee.salary, 0);
};
console.log(totalActiveSalaryEmployee());

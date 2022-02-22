import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    // this.employees = [{
    //   "id": 1,
    //   "firstName": "Ramesh",
    //   "lastName": "Fadatare",
    //   "emailId": "ramseh@gmail.com"
    // },
    // {
    //   "id": 2,
    //   "firstName": "John",
    //   "lastName": "Cena",
    //   "emailId": "cenagmail.com"
    
    // }];

    this.getEmployees();

  }
    private getEmployees(){
      this.employeeService.getEmployeesList().subscribe(data =>{
        this.employees=data;
      });
    }
}

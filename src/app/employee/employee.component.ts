import { Component, OnInit } from '@angular/core';
import { usermodel } from 'src/app/models/usermodel';
import { EmployeedataService } from 'src/app/core/services/employeedata.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {
 /* public employee!: usermodel;  
  public employees!: usermodel[];  
  
  constructor(private employeeService: EmployeedataService) { }  
  */
  ngOnInit(): void {  
   // this.getEmployees();  
  }  
  /*
  getEmployees() {  
    this.employeeService.getEmployees()  
    .subscribe((emps: usermodel[]) => this.employees = emps);  
  }  
  selected(employee: any){  
    this.employee = employee;  
  }  */
}

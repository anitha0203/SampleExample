import { Component, Input, OnInit } from '@angular/core';
import { usermodel } from 'src/app/models/usermodel';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.sass']
})
export class EmployeeDetailComponent implements OnInit {

  constructor() { }
 // @Input()
  //public employee!: usermodel;  
  ngOnInit(): void {
  }

}

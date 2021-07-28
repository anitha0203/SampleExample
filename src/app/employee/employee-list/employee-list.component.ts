import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { usermodel } from 'src/app/models/usermodel';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent implements OnInit {

  @Input()
 // public employees!: usermodel[];  
  @Output() public employeeSelected = new EventEmitter<usermodel>();  
  //public bsModalRef!: BsModalRef;  
    
  constructor(private modalService: BsModalService) {}  
    
    ngOnInit(): void {  
    }  
    
    selectEmployee(emp: usermodel) {  
    //  this.employeeSelected.emit(emp);     
    } 

}

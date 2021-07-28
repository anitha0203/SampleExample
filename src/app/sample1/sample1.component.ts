import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.sass']
})
export class Sample1Component implements OnInit {


  constructor(private user: UserServiceService) { }
message: any;
  ngOnInit() {
    
  }
  clickEvent(){
    this.getDataFormAPI1();
    console.log(this.fname,'its working')
  }
  fname: any;
  lname: any;

  
  getDataFormAPI1(){
    this.user.getData1().subscribe((response) => {
        console.log('Its Working', response);
        this.message = response;
    }, (error) => {
      console.log('Its a error', error);
    })
  }
  /*getDataFormAPI(){
    this.user.postAPIData().toPromise().then((data:any) => {
        console.log('Its Working', data);
        this.message = data;
    }, (error) => {
      console.log('Its a error', error);
    })
  }*/
}

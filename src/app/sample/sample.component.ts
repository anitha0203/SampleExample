import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.sass'],
  
})
export class SampleComponent implements OnInit {

  constructor(private user: UserServiceService,private router:Router   ) { }

  message: any;
  value2 = '';
  value1 = '';
  
  ngOnInit() {
  }

//value: string,value2: string
  clickme(){
   // this.value = value;
    //this.value2 = value2;
    this.getDataFormAPI();
    
  }
  signOut() : void{
    this.router.navigate([`login1`]);

  }
  getDataFormAPI(){
    this.user.getData('api/getData/?name1=' + this.value1 + '&name2=' + this.value2).subscribe((response) => {
       
        console.log('Its Working', response);
        this.message = JSON.stringify(response);
    }, (error) => {
      console.log('It is a error', error);
    })
  }
  /*getDataFormAPI(){
    this.user.postAPIData().toPromise().then((data:any) => {
        console.log('Its Working', data);
        this.message = data;
    }, (error) => {
      console.log('It is a  error', error);
    })
  }*/
}

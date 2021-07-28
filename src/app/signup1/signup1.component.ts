import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.component.html',
  styleUrls: ['./signup1.component.sass']
})
export class Signup1Component implements OnInit {

  user={UserName:'',Password:''};
  constructor(private router:Router) { }
  hide = true;
  ngOnInit(): void {
  }
  signup(){
    this.addItems();
  }
  login() : void{
    this.router.navigate([`login1`]);

  }
  signUp4() : void {
    this.router.navigate([`signup1`]);
  }

  addItems(){
    let exm = [];
    if(localStorage.getItem('user')) {
      exm = JSON.parse(localStorage.getItem('user') || '{}');
      exm = [this.user, ...exm];
    }else {
      exm = [this.user];
    }
    localStorage.setItem('user',JSON.stringify(exm));

  }
}

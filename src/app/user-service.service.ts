import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

 // private REST_API_SERVER = "http://localhost:3000/getData/";

  //public sendGetRequest(){
  //  return this.http.get(this.REST_API_SERVER);

 // getData(fname: string,lname: string){
 //   return this.http.get('api/getData/' + fname + '/' + lname )
//  }

  getData(url : string){
    return this.http.get(url )
  }

  getData1(){
    return this.http.get('/api/getData')
  }

  /*postAPIData(fname: string,lname: string){
    return this.http.post('/api/getData/'+ fname + '/' + lname , {'firstName' : 'Code'})
  }*/
}

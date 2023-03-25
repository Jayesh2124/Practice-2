import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(){
    debugger;
    return this.http.get('http://localhost:3000/User');
  }

  gettocken(){
    let tock = localStorage.getItem('Auth')
    return tock
  }
}

import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  constructor(private auth:LoginService) {}

  Login()
  {
    debugger
    this.auth.login().subscribe((result:any)=>{
      debugger;
      localStorage.setItem('Auth', result)
      console.log(result);

    })
  }
}

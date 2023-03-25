import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptInterceptor implements HttpInterceptor {

  constructor(private auth:LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //console.log(request);
    let to = this.auth.gettocken();
    console.log(to);
    
    const API_Tocken = "?ghuikt"
    const tocken = request.clone({
      setHeaders : {
        API_Tocken,
        
      }
    })
    return next.handle(tocken);
  }
}

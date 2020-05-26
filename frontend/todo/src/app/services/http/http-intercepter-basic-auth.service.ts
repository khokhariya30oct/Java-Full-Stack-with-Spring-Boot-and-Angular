import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from '../BasicAuthentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {


  constructor(
    private basicAuthenticatioService : BasicAuthenticationService
  ) { }

  // generateAuthHeaderString(user,pass) {
  //   let username = user || 'akhokhariya';
  //   let password= pass || '5123';
  //   let headerString = 'Basic ' + window.btoa(username  +':' + password)
  //   return headerString;
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    let username = this.basicAuthenticatioService.getAuthenticatedUser();
    let token = this.basicAuthenticatioService.getAuthenticatedToken();
    if (username && token) {
      req = req.clone({
        setHeaders: {
          Authorization: token
        }
      })
    }
    return next.handle(req);
  }
}

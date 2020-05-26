import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { HttpIntercepterBasicAuthService } from './http/http-intercepter-basic-auth.service';
import { map } from 'rxjs/operators';
import { URL_API } from '../app.constants';

export class AuthenticationBean {
  constructor(public message : String) {

  }
}

export const TOKEN = 'token';

export const AUTHENTICATED_USER = 'authenticUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http : HttpClient,
    // private httpComponent : HttpIntercepterBasicAuthService
  ) { }
  
  execteJWTAuthenticateService(username,password) {
    return this.http.post<any>(`${URL_API }/authenticate`,
      {username,password}
      )
      .pipe(
        map (
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER,username);
            sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
            return data;
          }
        )
        
      )
    
  }
  
  execteAuthenticateService(username,password) {
    let headerString = 'Basic ' + window.btoa(username  +':' + password)
    let header = new HttpHeaders({
      Authorization : headerString
    })
    return this.http.get<AuthenticationBean>(`${URL_API }/basicauth`,{headers : header})
      .pipe(
        map (
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER,username);
            sessionStorage.setItem(TOKEN,headerString);
            return data;
          }
        )
        
      )
    
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
    
  }

  getAuthenticatedToken(){
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }


  isUserLoggedin() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  terminateSession() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);        
  }


}

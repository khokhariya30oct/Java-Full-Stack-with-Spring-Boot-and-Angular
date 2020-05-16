import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate (username,password) {
    if(username == 'akhokhariya' && password == '5123') {
      sessionStorage.setItem('authenticUser',username);
      return true;      
    }
    return false;
  }

  isUserLoggedin() {
    let user = sessionStorage.getItem('authenticUser');
    return !(user === null);
  }

  terminateSession() {
    sessionStorage.removeItem("authenticUser");    
  }


}

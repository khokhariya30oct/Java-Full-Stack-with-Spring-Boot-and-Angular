import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from 'src/app/app.constants';

export class getWelcomeMessage {
  constructor(public message : String) {

  }
} 


@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(
    private http : HttpClient
    ) { }

  getWelcomeMessage() {
    return this.http.get<getWelcomeMessage>(`${URL_API}/hello-bean/Ashish`)
    
  }

  getWelcomeMessageWithParam(name) {
    return this.http.get<getWelcomeMessage>(`${URL_API}/hello-bean/${name}`)    
  }

  
}

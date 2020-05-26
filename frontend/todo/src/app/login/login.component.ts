import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../services/BasicAuthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'akhokhariya';
  password = '5123';
  erroMessage = 'Invalid Credentials';
  isInvalidLogin = false;
  constructor(private router:Router,
      private hardCodedAuthservice : HardcodedAuthenticationService,
      private basicAuthService : BasicAuthenticationService
    ) { }

  ngOnInit() {
  }

  submit() {
    if(this.hardCodedAuthservice.authenticate(this.username,this.password)){
      this.isInvalidLogin = false;
      this.router.navigate(['welcome',this.username])
    }
    else{
      this.isInvalidLogin = true;      
    }
  }

  basicAuthHandler() {
    this.basicAuthService.execteAuthenticateService(this.username,this.password).subscribe(
      data => {
        this.isInvalidLogin = false;
        this.router.navigate(['welcome',this.username])
      },
      error => {
        this.isInvalidLogin = true;
      }
    )
  }

  basicJWTAuthHandler() {
    this.basicAuthService.execteJWTAuthenticateService(this.username,this.password).subscribe(
      data => {
        this.isInvalidLogin = false;
        this.router.navigate(['welcome',this.username])
      },
      error => {
        this.isInvalidLogin = true;
      }
    )
  }

  


}

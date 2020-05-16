import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

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
      private hardCodedAuthservice : HardcodedAuthenticationService
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

}

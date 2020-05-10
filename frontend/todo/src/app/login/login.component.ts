import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit() {
  }

  submit() {
    
    if(!(this.username == 'akhokhariya' && this.password == '5123')) {
      this.isInvalidLogin = true;      
    }
    else{
      this.isInvalidLogin = false;
      this.router.navigate(['welcome',this.username])
    }
  }

}

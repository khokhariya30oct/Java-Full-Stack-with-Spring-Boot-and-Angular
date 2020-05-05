import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'akhokhariya';
  password = '5123';
  constructor() { }

  ngOnInit() {
  }

  submit() {
    alert(this.password);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeService } from '../services/data/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = null;
  restRes : String = null;
  errorMsg : String = null;
  constructor(
    private route : ActivatedRoute,
    private welcomeService : WelcomeService
    ) { }

  ngOnInit() {
    this.name =  this.route.snapshot.params['name']
  }

  getMeRestCall () {
    this.welcomeService.getWelcomeMessageWithParam(this.name).subscribe( 
      data => {this.restRes = data.message},
      error => {this.errorMsg = error}
    );
  }

}

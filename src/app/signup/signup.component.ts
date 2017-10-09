import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  // route:Router
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSignUp(){
      this.router.navigate(['login']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { SignupService } from "app/signup/signup.service";
import { User } from "app/signup/user";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  // route:Router

  // myData={
  //   userNm:'',
  //   userEm:'',
  //   userMob:'',
  //   userPass:''
  // };

  myForm:NgForm; 
  constructor(
    private router:Router,
    private signup:SignupService
  ) { }

  ngOnInit() {
  }

  onSubmit(myForm: NgForm){
   console.log(myForm.value);
   let user:User= new User();
   user.name=myForm.value.name;
   user.email=myForm.value.email;
   user.mobile=myForm.value.mobile;
   user.pass=myForm.value.pass;
   this.signup.saveUser(user).subscribe(res=>console.log(res));
   
  }

  onSignUp(){
      this.router.navigate(['login']);
  }

}

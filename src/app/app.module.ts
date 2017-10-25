import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MyRoutingModule } from "app/app.router";
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { FormsModule } from '@angular/forms';
import { SignupService } from "app/signup/signup.service";
import { HttpModule } from "@angular/http";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ForgetComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    MyRoutingModule,
    FormsModule,
    HttpModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [SignupService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }

import { Injectable } from '@angular/core';
import {User} from './user';
import {Http} from '@angular/http';

@Injectable()
export class SignupService {

  constructor(
    private http: Http
  ) { }

  saveUser(user:User){
    return this.http.post('https://firstdemo-8092a.firebaseio.com/newUser.json',{user});
  }

}

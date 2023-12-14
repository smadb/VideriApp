import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  private token!:any;
  private refresh_token!:any;

  setToken(token:any){
    this.token = token;
  }

  getToken(){
    return this.token;
  }
}

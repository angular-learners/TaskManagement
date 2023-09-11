import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;

  constructor() { }

  set setLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
  }

  get getLoggedIn() {
    return this.isLoggedIn ? JSON.parse(localStorage.getItem('user-loggedin') as string) : this.isLoggedIn
    // if (this.isLoggedIn) {
    //   this.isLoggedIn = 
    //   return this.isLoggedIn;
    // }else{
    //   return this.isLoggedIn;
    // }
  }

  logout() {
    this.setLoggedIn = false;
    localStorage.removeItem('user-loggedin');
  }
}

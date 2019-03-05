import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userName: string = "";
  constructor(private cookieService: CookieService) {

  }
  getCurrentUser(): any {
    let token = this.cookieService.get("token");
    if (token) {
      let jWTHelper = new JwtHelperService();
      return jWTHelper.decodeToken(token);
    }
  }
  get isLoggedIn() {
    let token = this.cookieService.get("token");
    let jWTHelper = new JwtHelperService();

    if (token) {
      console.log("logged In");
      var user = jWTHelper.decodeToken(token);
      this.userName = user.name;
      return jWTHelper.isTokenExpired(token);
    }
    else return false;
  }

}

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private cookieService:CookieService)
  {

  }
  get isLoggedIn()
  {
    let token=this.cookieService.get("token");
    if(token)
    {
      console.log("logged In")
     return true;
    }
    else return false;
  }
 
}

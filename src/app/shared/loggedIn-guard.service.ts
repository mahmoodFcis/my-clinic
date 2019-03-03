import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { Injectable } from '@angular/core';

@Injectable(
    {providedIn:'root'}
)
export class LoggedInGuard implements CanActivate{
constructor(private loginService:LoginService,private router:Router){

}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
     if(this.loginService.isLoggedIn)
     return true;
     else 
     {
         this.router.navigate(["/login"]);
     }
  }
}
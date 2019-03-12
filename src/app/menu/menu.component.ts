import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import {environment} from '../../environments/environment';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  url:string="";
  urlParam:string="/home";
  constructor(private cookieService:CookieService,private router:Router,  public loginService:LoginService) { }

  ngOnInit() {
   this.url=environment.backendServerURL;
  }

  logOut()
  {
    this.cookieService.delete("token");
    
    this.router.navigate(["/login"]);
  }

}

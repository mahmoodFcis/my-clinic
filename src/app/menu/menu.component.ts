import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  urlParam:string="/home";
  constructor(private cookieService:CookieService,private router:Router, private loginService:LoginService) { }

  ngOnInit() {
   
  }

  logOut()
  {
    this.cookieService.delete("token");
    
    this.router.navigate(["/login"]);
  }

}

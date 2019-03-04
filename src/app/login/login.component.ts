import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  componentTitle = "Login from here";
  faceBookUrl = "https://facebook.login.com";
  userModel = { userName: "", password: "" };
  isYellow: boolean;
  loginMessage: string = "";
  constructor(private loginService: LoginService,private router:Router,private route:ActivatedRoute) { this.isYellow = true; }

  ngOnInit() {
    this.componentTitle=this.route.snapshot.data.title;
  }

  getTitle(): string {
    return this.componentTitle;
  }
  login(): void {
    console.log(this.userModel);
    this.loginService.login(this.userModel).subscribe(r => {

      if (!r) {
        this.loginMessage = "user name or password is incorrect";
      }
      else this.router.navigate(["/list-clinics"]);
      
    }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private loginService: LoginService,private route:ActivatedRoute,private router:Router) { this.isYellow = true; }

  ngOnInit() {
    //this.componentTitle=this.route.snapshot.data.pageTitle;
    this.route.data.subscribe(data=>this.componentTitle=data.pageTitle)
  }

  getTitle(): string {
    return this.componentTitle;
  }
  login(): void {
    console.log(this.userModel);
    this.loginService.login(this.userModel).subscribe(r => {

      if (!r) {
        console.log("invalid credetnails")
        this.loginMessage = "user name or password is incorrect";
      }
      else 
      {
        this.router.navigate(['/home']);
      }
    },
    (err)=>  this.loginMessage = "user name or password is incorrect"
    );
  }
}

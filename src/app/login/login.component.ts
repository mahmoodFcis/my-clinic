import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  componentTitle = "Login from here";
  faceBookUrl = "https://facebook.login.com";
  email = "myemail@hotmail.com";
  password: string = "1234";
  isYellow: boolean;
  constructor() { this.isYellow = true;}

ngOnInit() {
}

getTitle(): string
{
  return this.componentTitle;
}
login():void
{
  console.log("logged in");
}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  saveCustomerInformation(fg):void{
    if(fg.valid)
    {
      // calling the api to register a new user into the system
    }
  }
}

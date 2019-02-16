import { Component } from '@angular/core';
import { Booking } from './create-booking';

@Component({

    selector:"add-booking",
    templateUrl:"./create-booking.component.html",
    styleUrls:['./create-booking.component.css']
})
export class CreateBookingComponent{
  booking:Booking=new Booking();

  book(form):void{

    console.log(form);
  }
}
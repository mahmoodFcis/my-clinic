import { Component } from '@angular/core';

@Component({
    selector:"app-list-bookings",
    templateUrl:"./list-bookings.component.html",
    styles:[".C1{color:blue}"]
   
})
export class ListBookingsComponent{
  pageTitle="List Bookings";
  _searchValue="Type your search here";
  bookings:any[];
  constructor()
  {
      this.bookings=[{Date:'1/1/2019',Doctor:"Dr. Ahmed", Clinic:"Dar Fouad"}];
  }
  search(searchValue: string): void
  {

    console.log(searchValue);
  }
}
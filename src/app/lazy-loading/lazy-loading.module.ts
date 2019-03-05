import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Router} from '@angular/router';
import { ListDoctorsComponent } from '../list-doctors/list-doctors.component';
import { ListBookingsComponent } from '../list-bookings/list-bookings.component';
@NgModule({
  declarations: [ListBookingsComponent ,ListDoctorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"list-bookings",component:ListBookingsComponent},
      {path:"list-doctors",component:ListDoctorsComponent}])
  ],
  exports:[RouterModule]
})
export class LazyLoadingModule { }
 
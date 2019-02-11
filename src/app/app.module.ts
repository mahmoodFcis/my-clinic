import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListClinicsComponent } from './list-clinics/list-clinics.component';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { ClinicDetailComponent } from './clinic-detail/clinic-detail.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SubmitReviewComponent } from './submit-review/submit-review.component';
import { ListBookingsComponent } from './list-bookings/list-bookings.component';
import { ClinicCardComponent } from './list-clinics/clinic-card/clinic-card.component';
import { PaginationComponent } from './shared/pagination.component';
import { ClinicService } from './list-clinics/list-clinics.service';
import { PaginationFilter } from './shared/pagination-filter.pipe';
import { PaginationService } from './shared/pagination.service';
import { ClinicCardDirective } from './list-clinics/clinic-card/clinic-card.directive';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DeleteConfirmationDirective } from './shared/directives/confirmation.directive';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ListClinicsComponent,
    ListDoctorsComponent,
    BookingComponent,
    LoginComponent,
    RegisterComponent,
    RegisterDoctorComponent,
    DoctorDetailComponent,
    ClinicDetailComponent,
    ChangePasswordComponent,
    SubmitReviewComponent,
    ListBookingsComponent,
    ClinicCardComponent,
    PaginationComponent,
    PaginationFilter,
    ClinicCardDirective,
    DeleteConfirmationDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ModalModule.forRoot()
  ],
  exports:[],
  providers: [ClinicService,PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
    ClinicDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

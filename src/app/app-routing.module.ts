import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListClinicsComponent } from './list-clinics/list-clinics.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterDoctorComponent } from './register-doctor/register-doctor.component';
import { ClinicDetailComponent } from './clinic-detail/clinic-detail.component';
import { DoctorDetailComponent } from './doctor-detail/doctor-detail.component';
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import { BookingComponent } from './booking/booking.component';
import { ListBookingsComponent } from './list-bookings/list-bookings.component';
import { AddClinicComponent } from './add-clinic/add-clinic.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoggedInGuard } from './shared/loggedIn-guard.service';
import { ClinicsListResolver } from './list-clinics/ClinicsListResolver';

const routes: Routes = [
{path:'list-clinics',component:ListClinicsComponent,canActivate:[LoggedInGuard],resolve:{
  clinicsList:ClinicsListResolver
}},
{path:'home',component:HomeComponent, data:{animation:"HomePage"}},
{path:'login',component:LoginComponent,data:{pageTitle:"Login Page",animation:"LoginPage"}},
{path:'register',component:RegisterComponent},
{path:'register-doctor',component:RegisterDoctorComponent},
{path:'clinic-detail/:ClinicId',component:ClinicDetailComponent},
{path:'doctor-detail',component:DoctorDetailComponent},
{path:'list-doctors',component:ListDoctorsComponent},
{path:'booking',component:BookingComponent},
{path:"list-bookings",component:ListBookingsComponent},
{path:'add-clinic',component:AddClinicComponent},
{path:'searchDoctors',component:HomeComponent},
{path:'',redirectTo:'home',pathMatch:"full"},
{path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

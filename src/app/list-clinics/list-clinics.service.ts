import { Injectable } from '@angular/core';

@Injectable()
export class ClinicsService {
getClinics(): any[] {
 let clinics=[];
  for(let i=1;i<=100;i++)
  {
    clinics.push({Id:i,ImageUrl:"../../assets/img/doctor_listing_3.jpg",Title:"My Clinic "+i,Speciality:"Dental"});
  }
  return clinics;
}
}
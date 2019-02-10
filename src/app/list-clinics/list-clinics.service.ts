import { Injectable } from '@angular/core';

@Injectable()
export class ClinicService{
getAll():any[]{
    let clinics:any[] =[];

    for(let i=0;i<=100;i++)
    {
      clinics.push({Id:i+1,ImageUrl:"../../assets/img/doctor_listing_1.jpg",Title:"My Clinic"+i,Speciality:"Dental"})
    }
    return clinics;
}
}
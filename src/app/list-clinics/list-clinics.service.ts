import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ClinicService{
  clinicsList:BehaviorSubject<any[]>=new BehaviorSubject<any[]>([]);
  constructor(){
    this.getAll();
  }
getAll():any[]{
    let clinics:any[] =[];

    for(let i=0;i<=100;i++)
    {
      clinics.push({Id:i+1,openTime:'19',ImageUrl:"../../assets/img/doctor_listing_3.jpg",Title:"My Clinic"+i,Speciality:"Dental"})
    }
    this.clinicsList.next(clinics);
    return clinics;
}
}
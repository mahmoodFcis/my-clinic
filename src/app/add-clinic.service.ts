import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddClinicService {

  clinicsList:any[];
  constructor() {
    this.clinicsList=[{clinicName:"dar fouad"},{clinicName:"el Maadi clinic"}]
   }
}

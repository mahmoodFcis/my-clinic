import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-clinics',
  templateUrl: './list-clinics.component.html',
  styleUrls: ['./list-clinics.component.css']
})
export class ListClinicsComponent implements OnInit {

  clinics=[{Id:1,ImageUrl:"../../assets/img/doctor_listing_1.jpg",Title:"My Clinic",Speciality:"Dental"},{Id:2,ImageUrl:"../../assets/img/doctor_listing_1.jpg",Title:"My Clinic 2",Speciality:"Dental"}];
  constructor() { }
  doChildAction(msg):void{
    if(msg.indexOf("delete")!=-1)
    {
      var id=msg.split(":")[1];
      if(id)
      { 
        var filteredClinics=this.clinics.filter(c=>c.Id!=id);
        this.clinics=filteredClinics;
      }
    }
  }
  ngOnInit() {
  }

}

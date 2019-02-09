import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClinicsService } from './list-clinics.service';

@Component({
  selector: 'app-list-clinics',
  templateUrl: './list-clinics.component.html',
  styleUrls: ['./list-clinics.component.css']
})
export class ListClinicsComponent implements OnInit {
  clinicsService: ClinicsService;
  pageSize=10;
  clinics=[];
  clinicsAll=[];
  constructor(clinicService:ClinicsService) {
    this.clinicsService=clinicService;
   }
  doChildAction(msg):void{
    if(msg.indexOf('delete')!=-1)
    {
      var id=msg.split(':')[1];
      if(id)
      { 
        var filteredClinics=this.clinics.filter(c=>c.Id!=id);
        this.clinics=filteredClinics;
      }
    }
  }
  ngOnInit() {
   this.clinics= this.clinicsService.getClinics();
  }

}

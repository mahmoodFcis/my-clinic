import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../list-clinics/list-clinics.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clinic-detail',
  templateUrl: './clinic-detail.component.html',
  styleUrls: ['./clinic-detail.component.css']
})
export class ClinicDetailComponent implements OnInit {

  constructor(private clinicService:ClinicService, private activatedRoute:ActivatedRoute) { }
  
  ngOnInit() {
   this.activatedRoute.paramMap.subscribe(r=>{
     let clinicId=r.get("clinicId");
     this.clinicService.clinicsList.asObservable().subscribe(res=>{
      
      console.log(res.filter(c=>c.Id==clinicId));
     });
     
   });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinicService } from '../list-clinics/list-clinics.service';

@Component({
  selector: 'app-clinic-detail',
  templateUrl: './clinic-detail.component.html',
  styleUrls: ['./clinic-detail.component.css']
})
export class ClinicDetailComponent implements OnInit {
  clinic:any;
  constructor(private route:ActivatedRoute,private clinicService:ClinicService,private router:Router) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(p=>{
console.log(p);
      let id=p.get("ClinicId");
      console.log(id);
      if(id)
      {
       this.clinic=this.clinicService.getBy(parseInt(id));
       console.log(this.clinic);
      }
    })

    
    
     
  }

  loadDetails(id):void
    {
     this.router.navigate(["/clinic-detail/"+id])
    }

}

import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ClinicService } from './list-clinics.service';
import { PaginationComponent } from '../shared/pagination.component';
import { PaginationService } from '../shared/pagination.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-list-clinics',
  templateUrl: './list-clinics.component.html',
  styleUrls: ['./list-clinics.component.css'],
  animations:[
    trigger("fadeIn",
[transition(':enter,:leave',
[style({
    opacity:0,backgroundColor:'red' 
}),animate(2000)])
])]
})
export class ListClinicsComponent implements OnInit , AfterViewInit, AfterViewChecked {
  pageSize:number=10;
  favList:any[]=[];
 private searchVal:string="";
 allClinics:any[]=[];
  @ViewChild(PaginationComponent) pagination:PaginationComponent;
  clinicService:ClinicService;
  clinics=[];
  constructor(_clinicService:ClinicService,private paginationService:PaginationService, private route:ActivatedRoute) { 
    this.clinicService=_clinicService;
  }

  set SearchVal(val)
  {
    this.searchVal=val;

    this.clinics=this.allClinics.filter(c=>c.Title.indexOf(this.searchVal)!=-1);

  }
  ngDoCheck()
  {
   
  }
  addFav(clinic:any):void{
    this.favList.push(clinic);
  }
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
    this.route.data.subscribe(data=>{
      console.log("data of resolved",data);
      this.clinics=data.clinicsList;
      this.allClinics=this.clinics;
    });
   
    this.paginationService.currentPage.subscribe(pgeNumber=>console.log("current page number from service",pgeNumber));
  }

  ngAfterViewInit()
  {
    console.log(this.pagination.currentPage);
  }
  ngAfterViewChecked()
  {
    console.log(this.pagination.currentPage);
  }
  ngAfterContentInit(){

    console.log("all ng-content data is loaded or initialized");
  }
  ngAfterContentChecked(){

    console.log("all ng-content data is loaded or initialized");
  }

  ngOnDestroy()
  {
    //this.paginationService.currentPage.unSubscribe();
  }

}

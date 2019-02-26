import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ClinicValidators } from './addClinic-validators';
import { AddClinicService } from '../add-clinic.service';
import { IClinic } from './clinic';
import {catchError} from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.css']
})
export class AddClinicComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder,private clinicService:AddClinicService) { 
  
    // this.form=new FormGroup({
    //   "clinicName": new FormControl("my clinic",[Validators.required,ClinicValidators.clinicNameShoudBeUnique(clinicService)]),
    //   "openTime":new FormControl(""),
    //   "closeTime":new FormControl(""),
    //   "address":new FormControl("")
    // });

    this.form=this.fb.group({
      "clinicName": ["my clinic",[Validators.required],[ClinicValidators.clinicNameShoudBeUnique(this.clinicService)]],
      "openTime":[""],
      "closeTime":[""],
      "address":[""]
    })

    this.form.get("openTime").valueChanges.subscribe(v=>{
      console.log(v);
      this.form.get("closeTime").validator=ClinicValidators.compareTimeShouldBeGreater(this.form.get("openTime"));
    });

  }
  get clinicName(){
    return this.form.get('clinicName');
  }
save():void{
  let clinic:IClinic={
    clinicName:this.form.get("clinicName").value,
    openTime:this.form.get("openTime").value.toString(),
    closeTime:this.form.get("closeTime").value.toString(),
    address:this.form.get("address").value

  };

  this.clinicService.add(clinic)
  .subscribe((e)=>console.log(e));

} 

errorHandler(error:HttpErrorResponse):Observable<HttpErrorResponse>
{
  console.error("error",error);
  return throwError(error);
}
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ClinicValidators } from './addClinic-validators';
import { AddClinicService } from '../add-clinic.service';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.css']
})
export class AddClinicComponent implements OnInit {
  form:FormGroup;
  constructor(private fb:FormBuilder,clinicService:AddClinicService) { 
  
    // this.form=new FormGroup({
    //   "clinicName": new FormControl("my clinic",[Validators.required,ClinicValidators.clinicNameShoudBeUnique(clinicService)]),
    //   "openTime":new FormControl(""),
    //   "closeTime":new FormControl(""),
    //   "address":new FormControl("")
    // });

    this.form=this.fb.group({
      "clinicName": ["my clinic",[Validators.required,ClinicValidators.clinicNameShoudBeUnique(clinicService)]],
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
  console.log(this.form);
}
  ngOnInit() {
  }

}

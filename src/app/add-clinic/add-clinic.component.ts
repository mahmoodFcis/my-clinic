import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TimeComparisonValidator } from './timeComparison.validator';

@Component({
    selector: 'add-clinic',
    templateUrl: './add-clinic.component.html',
    styleUrls: ['./add-clinic.component.css']
})
export class AddClinicComponent {
    form: FormGroup;
    constructor() {
        this.form = new FormGroup({
            'clinicName': new FormControl('', Validators.required),
            'openTime': new FormControl(''),
            'closeTime': new FormControl(''),
            'address': new FormGroup({ 'addressBox': new FormControl("Cairo", Validators.minLength(10)) }),

        });
        this.openTime.valueChanges.subscribe(v=> {this.form.get('closeTime').validator= TimeComparisonValidator.compareTime(v as number); });
        
    }
    get openTime(){
        let _openTime= this.form.get('openTime');
       
        return _openTime;
    }
    get closeTime(){
        return this.form.get('closeTime');
    }
    get Name() {
        return this.form.get('clinicName').validator;
    }
    get Address() {
        return this.form.get('address.addressBox');
    }
save():void{
    console.log(this.form.valid);
}
}
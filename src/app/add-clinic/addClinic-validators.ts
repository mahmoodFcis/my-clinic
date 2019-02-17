import { AbstractControl, ValidationErrors } from '@angular/forms';
import { AddClinicService } from '../add-clinic.service';

export class ClinicValidators {

   
    static clinicNameShoudBeUnique(_clinicService: AddClinicService) {
        return (control: AbstractControl): ValidationErrors | null => {

            let name = control.value as string;
            
            var clinic=_clinicService.clinicsList.filter(c=>c.clinicName===name);
           

            if (clinic.length>0) {
                return { "nameShouldBeUnique": true };
            }
            return null;
        }
    }

    static compareTimeShouldBeGreater(timeFromControl: AbstractControl) {
        return (timeToControl: AbstractControl): ValidationErrors | null => {
    
           
            if ((timeToControl.value as number)<=(timeFromControl.value as number)) {
                return { "timeIsLessThanFrom": {from:timeFromControl.value,to:timeToControl.value} };
            }
            return null;
        }
    }
}
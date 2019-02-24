import { AbstractControl, ValidationErrors } from '@angular/forms';
import { AddClinicService } from './add-clinic.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export class ClinicValidators {

   
    static clinicNameShoudBeUnique(_clinicService: AddClinicService) {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {

            let name = control.value as string;
            
            return _clinicService.getUsersBy(name).pipe(map(r=> r.length>0? {nameShouldBeUnique: true }:null));
           

           
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
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';


export class TimeComparisonValidator {
    static compareTime(compareToValue: number) {
        return (timeControl: AbstractControl): ValidationErrors | null => {
            console.log("to time",timeControl.value as number);
            console.log("from time",compareToValue);
            
            if ((timeControl.value as number) < (compareToValue)) {
                return { 'TimeError': true }
            }
            return null;

        }
    }
}
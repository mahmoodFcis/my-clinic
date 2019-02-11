import { Directive, ElementRef } from '@angular/core';

@Directive({selector:"[app-highlight]"})
export class ClinicCardDirective {
    constructor(el:ElementRef)
    {
        el.nativeElement.style.borderStyle='solid';
        el.nativeElement.style.borderColor='red';
        
    }

}
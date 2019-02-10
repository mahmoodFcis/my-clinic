import { Directive, ElementRef } from '@angular/core';

@Directive({selector:"[app-highlight]"})
export class ClinicCardDirective {
    constructor(el:ElementRef)
    {
        console.log('from the directive');
        el.nativeElement.style.display="none";
    }

}
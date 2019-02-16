import { Directive, ElementRef, Input } from '@angular/core';

@Directive({selector:"[app-highlight]"})
export class ClinicCardDirective {

    constructor(private el:ElementRef)
    {
       
       
       
    }

    @Input() openTime:string;
    ngOnChanges()
    {
        console.log(this.openTime);
        console.log((new Date()).getHours().toString());
         if(this.openTime===(new Date()).getHours().toString())
         {
            this. el.nativeElement.style.borderStyle='solid';
            this. el.nativeElement.style.borderColor='green';
            this. el.nativeElement.insertAdjacentHTML('afterbegin','<strong>Open</strong>')
         }
         else 
         {
             this.el.nativeElement.style.borderStyle='solid';
            this. el.nativeElement.style.borderColor='red';
            this. el.nativeElement.insertAdjacentHTML('afterbegin','<strong>closed</strong>')
         }
    }
   

}
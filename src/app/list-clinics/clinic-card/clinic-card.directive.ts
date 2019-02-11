import { Directive, ElementRef, Input } from '@angular/core';
import { Time } from '@angular/common';

@Directive({selector:"[clinic-highlightStatus]"})
export class ClinicCardDirective {
    constructor(private el:ElementRef)
    {
        
        
    }
    @Input() openTime: string;

    ngOnInit(): void {
        if(this.openTime===(new Date()).getHours().toString()){
            this.el.nativeElement.style.borderStyle="solid";
            this.el.nativeElement.style.borderColor="green";
            this.el.nativeElement.insertAdjacentHTML("afterBegin","<strong style='color:green'>Open</strong>");
        }
        else 
        {
            this.el.nativeElement.style.borderStyle="solid";
            this.el.nativeElement.style.borderColor="red";
            this.el.nativeElement.insertAdjacentHTML("beforeend","<strong>Closed</strong>");
        }
    }

}
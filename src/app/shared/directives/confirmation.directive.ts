import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({selector:'[delete-confirmation]'})
export class ConfirmationDirective{
    
    @Input() message:string;
    @Output() confirm:EventEmitter<boolean>=new EventEmitter<boolean>();

    @HostListener('click') onclick()
    {
        if(confirm(this.message))
        {
            this.confirm.emit(true);
        }
        else this.confirm.emit(false);
    }
    
    ngOnInit()
    {
        
    }
}
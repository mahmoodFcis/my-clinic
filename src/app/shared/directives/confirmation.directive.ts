import { Directive, Input, TemplateRef, HostListener } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Directive({selector:'[modal-confirmation]',
exportAs:'modal'})
export class DeleteConfirmationDirective{
    modalRef: BsModalRef;
    @Input() message: string;
    @Input() modalContent:TemplateRef<any>;
    constructor(private modalService: BsModalService) {
        

        
    }
    @HostListener('click',['$event']) onclick($event):boolean{
        console.log($event);
        if(confirm("are you sure"))
        {
            return true;
        }
        else $event.stopPropagation();
    }
}
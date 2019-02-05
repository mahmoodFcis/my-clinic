import { Component ,Input, Output, EventEmitter} from '@angular/core';

@Component({selector:"clinics-card",
templateUrl:"./clinic-card.component.html"})
export class ClinicCardComponent{
    @Input() cardClinic:any;
    @Output() actionMessage:EventEmitter<string>=new EventEmitter<string>();
    delete(){
        this.actionMessage.emit("delete:"+this.cardClinic.Id);
    }
}  
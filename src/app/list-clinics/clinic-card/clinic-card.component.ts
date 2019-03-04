import { Component ,Input, Output, EventEmitter} from '@angular/core';
import {trigger, transition, style, animate} from '@angular/animations';
@Component({selector:"clinics-card",
templateUrl:"./clinic-card.component.html",
animations:[trigger("fadeIn",
[transition(':enter,:leave',
[style({
    opacity:0,backgroundColor:'red',transform:'translateX(20%)'
}),animate('2s ease-in')])
])]
})

export class ClinicCardComponent{
    @Input() cardClinic:any;
    @Output() addToFavorite:EventEmitter<any>=new EventEmitter<any>();
    @Output() actionMessage:EventEmitter<string>=new EventEmitter<string>();
    delete(isConfirmed:boolean){
        if(isConfirmed)
        this.actionMessage.emit("delete:"+this.cardClinic.Id);
    }
}  
import { Component ,Input, Output, EventEmitter} from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { slideAnimation, slideOutAnimation } from 'src/app/app.animations';

@Component({selector:"clinics-card",
templateUrl:"./clinic-card.component.html",
animations:[slideOutAnimation,slideAnimation]
}
)
export class ClinicCardComponent{
    @Input() cardClinic:any;
    @Output() addToFavorites:EventEmitter<any>=new EventEmitter<any>();
    animationState:string=":enter";
    @Output() actionMessage:EventEmitter<string>=new EventEmitter<string>();
    delete(isConfirmed:boolean){
        if(isConfirmed)
        this.actionMessage.emit("delete:"+this.cardClinic.Id);
    }

    animationCallback(event)
    {
        console.log(event);
    }
}  
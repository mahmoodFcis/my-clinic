import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PaginationService{

   private messageService:BehaviorSubject<string>=new BehaviorSubject<string>("currentPage");
    currentPage:any;
    constructor(){
    this.currentPage=this.messageService.asObservable();
    }
    setCurrentPageVal(currentPage){
       this.messageService.next(currentPage);
    }
}
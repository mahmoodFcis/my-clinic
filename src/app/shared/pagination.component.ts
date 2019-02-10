import { Component, Input, OnChanges } from '@angular/core';
import { PaginationService } from './pagination.service';

@Component({selector:'app-pagination',
templateUrl:'./pagination.component.html'
})
export class PaginationComponent implements OnChanges{

    constructor( private paginationService:PaginationService){

    }
    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        this.pages=[];
      if(this.recordsCount>0 && this.pageSize>0)
      {
          let pagesCount:number=Math.floor(this.recordsCount/this.pageSize);
          if(pagesCount===0) pagesCount=1;
          for(let i=0;i<pagesCount;i++)
          {
              this.pages.push(i+1);
          }
      }
    }
pages: number[]=[];
@Input() pageSize:number;
@Input() recordsCount:number;
currentPage:number=1;
changePageNumber(pageNo:number){
    this.currentPage=pageNo;
    this.paginationService.setCurrentPageVal(pageNo);
}

}
import { Input, Component, OnChanges } from '@angular/core';
@Component({
    selector: 'pagination',
    templateUrl: "./pagination.component.html"
})
export class PaginationComponent implements OnChanges {
    pages: number[];
    currentPage: number=1;
    @Input() pageSize: number;
    @Input() recordsCount: number;
    ngOnChanges(): void {
        this.pages = [];
        if (this.recordsCount > 0 && this.pageSize > 0) {
            let pagesCount: number = Math.floor(this.recordsCount / this.pageSize);
            if(pagesCount===0) { pagesCount=1;
            }
            for (let i = 0; i < pagesCount; i++) {
                this.pages.push(i + 1);
            }
        }
        console.log("number of pages",this.pages.length);
    }
}
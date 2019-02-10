import { PipeTransform, Pipe } from '@angular/core';
@Pipe({name:"pFilter"})
export class PaginationFilter implements PipeTransform{
    transform(value: any,pageSize:number,currentPage:number) {
       
        return value.filter(v=> v.Id>=((pageSize)*(currentPage-1)+1) && v.Id<=(pageSize*currentPage));
    }

}
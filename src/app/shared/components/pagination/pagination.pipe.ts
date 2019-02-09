import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:"pFilter"})
export class PaginationFilter implements PipeTransform{
    transform(value: any[], pageNumer:number,pageSize:number) {
        if(value.length>0 && value.length>=(pageNumer*pageSize)){
            console.log(value);
           // return value.splice((pageNumer-1)*pageSize,pageSize);
            return value.filter(v=>v.Id>=((pageNumer-1)*pageSize) && v.Id <=(pageNumer*pageSize));
        }
        else return value;
    }

}
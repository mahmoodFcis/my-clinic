import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {map, filter} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Clinic } from './clinic';
@Injectable()
export class AddClinicService{
    constructor(private http:HttpClient){

    }

    getUsersBy(name:string):Observable<Clinic[]> {
       let exists=false;
       return this.http.get<Clinic[]>('http://localhost:4300/api/clinics').pipe(
           filter((f:Clinic[])=>f.filter(c=>c.clinicName===name).length>0)
       );
       
       
    }
}
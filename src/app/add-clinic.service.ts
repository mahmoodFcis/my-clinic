import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IClinic } from './add-clinic/clinic';
import { CookieService } from 'ngx-cookie-service';
import { Configuration } from './config/config';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddClinicService {

  clinicsList:any[];
  constructor(private http:HttpClient, private cookieService:CookieService) {
    this.clinicsList=[{clinicName:"dar fouad"},{clinicName:"el Maadi clinic"}]
   }
   getBy(name):Observable<any[]>{

    return this.http.get<any[]>(Configuration.API_URL+"/clinics/")
    .pipe(
      filter((lst)=>{
        return lst.filter(c=>c.clinicName===name).length>0})
      );

   }
   add(clinic:any):Observable<any>{
     var httpOptions={headers:new HttpHeaders({"x-auth-token":this.cookieService.get("token")})}
     return this.http.post<any>("http://localhost:4300/api/clinics/",clinic,httpOptions);
   }
}

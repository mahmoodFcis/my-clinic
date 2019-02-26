import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Configuration } from '../config/config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: "root" })
export class LoginService {
    constructor(private http: HttpClient, private cookieService:CookieService) {

    }
    login(userModel): Observable<boolean> {
        return this.http.post<boolean>(Configuration.API_URL + "/user/login", userModel, { "observe": 'response' })
            .pipe(
                map((res: HttpResponse<Boolean>) => {
                    console.log(res);
                    var token = res.headers.get("x-auth-token");

                    //local storage example
                    //localStorage.setItem("token",token);

                    //cookie example

                    this.cookieService.set("token",token);
                    return res.body as boolean;
                }));
    }

}
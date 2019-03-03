import { Resolve } from '@angular/router';
import { ClinicService } from './list-clinics.service';
import { Injectable } from '@angular/core';
@Injectable({providedIn:"root"})
export class ClinicsListResolver implements Resolve<any[]>
{
    constructor(private clinicService:ClinicService)
    {

    }
    resolve(router,state)
    {
        return this.clinicService.getAll();
    }
}
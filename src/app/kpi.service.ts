import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const Dept_Api = 'https://dev-api.tqmi.io/setting-management/api/departments';
const Perspective_Api='https://dev-api.tqmi.io/setting-management/api/perspectives';
const Datacf_Api='https://dev-api.tqmi.io/setting-management/api/data-capture-frequency';
const Revisef_Api='https://dev-api.tqmi.io/setting-management/api/data-review-frequency';
const CreateKpi_Api='https://dev-api.tqmi.io/org-goal-management/api/goal';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
    providedIn: 'root'
  })

export class kpiService{


    constructor(private http:HttpClient){}

    dept(): Observable<any>{
        return this.http.get<any>(Dept_Api);
    }

    perspective():Observable<any>{
        return this.http.get(Perspective_Api);
    }
    datacf():Observable<any>{
        return this.http.get(Datacf_Api);
  
    }

    reviewf():Observable<any>{
        return this.http.get(Revisef_Api);
    }

    craeteKpi(kpiForm:any):Observable<any>{
       return  this.http.post(CreateKpi_Api,kpiForm,httpOptions)
    }
    
}
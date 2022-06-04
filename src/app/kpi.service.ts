import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const Dept_Api = 'https://dev-api.tqmi.io/setting-management/api/departments';
const Perspective_Api='https://dev-api.tqmi.io/setting-management/api/perspectives';
const Datacf_Api='https://dev-api.tqmi.io/setting-management/api/data-capture-frequency';
const Revisef_Api='https://dev-api.tqmi.io/setting-management/api/data-review-frequency';
const CreateKpi_Api='https://dev-api.tqmi.io/org-goal-management/api/goal';
const type_Api='https://dev-api.tqmi.io/setting-management/api/kpi-types';
const category_Api='https://dev-api.tqmi.io/setting-management/api/kpi-categories';
const fy_Api='https://dev-api.tqmi.io/setting-management/api/financial-years-list'
const created_Api='https://dev-api.tqmi.io/org-goal-management/api/goal/get-kpi-list-given-date-range?start=1648751400000&end=1680287399000&includeViewOnly=true';
const month_Api='https://dev-api.tqmi.io/setting-management/api/month-range';

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

    type():Observable<any>{
       return this.http.get(type_Api);
    }
    

    category():Observable<any>{
        return this.http.get(category_Api);

    }

    fystart():Observable<any>{
        return this.http.get(fy_Api);
  }

  createdKpi():Observable<any>{

    return this.http.get(created_Api);

  }

  selectMonth():Observable<any>{

    return this.http.get(month_Api);
  }
}
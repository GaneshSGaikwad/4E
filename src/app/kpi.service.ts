import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

const Dept_Api = environment.url+'/setting-management/api/departments';
const Perspective_Api=environment.url+'/setting-management/api/perspectives';
const Datacf_Api=environment.url+'/setting-management/api/data-capture-frequency';
const Revisef_Api=environment.url+'/setting-management/api/data-review-frequency';
const CreateKpi_Api=environment.url+'/org-goal-management/api/goal';
const type_Api=environment.url+'/setting-management/api/kpi-types';
const category_Api=environment.url+'/setting-management/api/kpi-categories';
const fy_Api=environment.url+'/setting-management/api/financial-years-list'
const created_Api=environment.url+'/org-goal-management/api/goal/get-kpi-list-given-date-range?start=1648751400000&end=1680287399000&includeViewOnly=true';
const month_Api=environment.url+'/setting-management/api/month-range';
const treeDetails_Api=environment.url+'/org-goal-management/api/kpi/hierarchical-users-kpi-status';

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

  treeData():Observable<any>{
    let queryParams = new HttpParams();
    queryParams=queryParams.append('employeeid','vikas.raut');
    queryParams=queryParams.append('fyStartDate','1648751400000');
    queryParams=queryParams.append('fyEndDate','1680287399000');
    queryParams=queryParams.append('groupby','kpi');
    queryParams=queryParams.append('kpiType','606573e173d7e41e2e59a4b1,606573e173d7e41e2e59a4b0,61ab4d8127d6319a5950235d,61ab4da827d6319a5950235e');
    queryParams=queryParams.append('aggregate','false');
    return this.http.get(treeDetails_Api,{params:queryParams});
  }
}
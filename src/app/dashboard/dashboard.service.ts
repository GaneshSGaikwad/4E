import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../user";

@Injectable({
  providedIn: 'root'
})
export class DashboardService{

    

    constructor(private http:HttpClient){}

   

}
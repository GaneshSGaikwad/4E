import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user";

const AUTH_API = 'https://dev-api.tqmi.io/user-management/login';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
  })
export class AuthService{

    // private url:string="";

    constructor(private http:HttpClient){}

    // login(){
    //    return this.http.get<any>(this.url);
    // }

    login(username: any, password: any): Observable<any> {
        return this.http.post(AUTH_API, {
          username,
          password
        }, httpOptions);
      }

    



}
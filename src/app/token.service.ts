import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";





@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  isClicked!:boolean;
  
  constructor() { 
   
  }
  signOut() {
    if(  localStorage.getItem('token') !=null){
    localStorage.clear();
    }else sessionStorage.clear();
   
  }
   saveToken(token: string,isClick:boolean): void {
      this.isClicked=isClick;
      //console.log("in save token "+isClick)
    if(isClick){
    localStorage.removeItem(token);
    localStorage.setItem('token', token);
    }else{
      sessionStorage.setItem('token1',token);
    }
    
  }
   getToken(): string | null {
     //console.log("in get token "+this.isClicked)
     if( localStorage.getItem('token') !=null){
     return  localStorage.getItem('token');
     }else return sessionStorage.getItem('token1');
     
  }
   saveUser(user: any) {
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(user));
  }
   getUser(): any {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }


  decodeToken():any{
    // if(this.getToken !==null){
      const decoded = jwt_decode(this.getToken() as string);
      console.log(decoded)
      return decoded;
    // }
  }
  


  
 
}
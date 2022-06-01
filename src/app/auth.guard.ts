import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private ts:TokenStorageService,private router:Router){}
  canActivate():boolean {
    if(this.ts.getToken()){
      return true;
 }
 this.router.navigate(['/login'])
    return false;
   
  }
  
}

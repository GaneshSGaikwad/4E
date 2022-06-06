import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TokenStorageService } from '../token.service';



@Component({
  selector: 'app-department-list',
  templateUrl:'./dashboard.component.html',
  styles: [
  ]
})
export class Dashboard implements OnInit {

  

  constructor(private router:Router,private ts:TokenStorageService,private http:HttpClient) { }

 
   x=localStorage.getItem('user');
  

  ngOnInit(): void {

  }

  logout(){
     this.ts.signOut();
     window.location.reload();
     this.router.navigate(['/login']);
  }



}

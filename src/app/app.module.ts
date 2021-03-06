import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts'

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { NgSelectModule } from '@ng-select/ng-select';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { CreateKPI } from './createKPI.component';
import { authInterceptorProviders } from './auth.interceptor';
import { Navbar } from './navbar/navbar.component';
import { ListofkpiComponent } from './listofkpi/listofkpi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewKpiComponent } from './view-kpi/view-kpi.component';
import { CommonModule } from '@angular/common';
import { PagenotfoundComponent } from './pageNotFound/pagenotfound.component';
import { OrgTreeComponent } from './org-tree/org-tree.component';

import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { PiechartComponent } from './piechart/piechart.component'






@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    routingcomponent,
    CreateKPI,
    Navbar,
    ListofkpiComponent,
    ViewKpiComponent,
    PagenotfoundComponent,
    OrgTreeComponent,
    PiechartComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    NgSelectModule,
    CommonModule,
    MatTreeModule,
    MatIconModule

  
    
    
   
  ],
  providers: [authInterceptorProviders,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

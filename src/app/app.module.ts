import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts'

import { LoginComponent } from './login/login.component';



import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { CreateKPI } from './createKPI.component';
import { authInterceptorProviders } from './auth.interceptor';
import { Navbar } from './navbar/navbar.component';
import { ListofkpiComponent } from './listofkpi/listofkpi.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    routingcomponent,
    CreateKPI,
    Navbar,
    ListofkpiComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    
    
   
  ],
  providers: [authInterceptorProviders,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

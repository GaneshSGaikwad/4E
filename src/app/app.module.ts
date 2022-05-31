import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts'

import { LoginComponent } from './login/login.component';



import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { CreateKPI } from './createKPI.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    routingcomponent,
    CreateKPI,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

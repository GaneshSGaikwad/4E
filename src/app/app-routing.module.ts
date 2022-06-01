import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateKPI } from './createKPI.component';
import { Dashboard } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
   {path:'' ,redirectTo:'/login', pathMatch:'full'},
   {path:'dashboard' ,component:Dashboard , canActivate:[AuthGuard]},
  {path:'login' ,component:LoginComponent },
  {path:'signup' ,component:SignupComponent },
  {path:'createkpi' ,component:CreateKPI,canActivate:[AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponent=[Dashboard,LoginComponent];
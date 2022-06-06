import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateKPI } from './createKPI.component';
import { Dashboard } from './dashboard/dashboard.component';
import { ListofkpiComponent } from './listofkpi/listofkpi.component';
import { LoginComponent } from './login/login.component';
import { OrgTreeComponent } from './org-tree/org-tree.component';
import { PagenotfoundComponent } from './pageNotFound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
   {path:'' ,redirectTo:'/login', pathMatch:'full'},
   {path:'dashboard' ,component:Dashboard , canActivate:[AuthGuard]},
  {path:'login' ,component:LoginComponent },
  {path:'signup' ,component:SignupComponent },
  {path:'createkpi' ,component:CreateKPI,canActivate:[AuthGuard]},
  {path:'listofkpi' ,component:ListofkpiComponent,canActivate:[AuthGuard]},
  {path:'orgtree' ,component:OrgTreeComponent,canActivate:[AuthGuard]},
  {path:"**" ,component:PagenotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponent=[Dashboard,LoginComponent];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './comp/form/form.component';
import { HomeComponent } from './comp/home/home.component';
import { LoginComponent } from './comp/login/login.component';

const routes: Routes = [
  {path:"register",component:FormComponent},
  {path:"Home",component:HomeComponent},
  {path:"Login",component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

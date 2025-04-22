import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comp/home/home.component';
import { FormComponent } from './comp/form/form.component';
import { LoginComponent } from './comp/login/login.component';
import { UserComponent } from './comp/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

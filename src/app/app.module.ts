import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routes';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    NotfoundComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule, ReactiveFormsModule, HttpModule, JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

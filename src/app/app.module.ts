import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {EmpListModule} from './empList/empList.module';
import {AppRoutingModule} from './app.routes';

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
    BrowserModule,FormsModule, ReactiveFormsModule, HttpModule, JsonpModule,EmpListModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// The application continues to work just the same,
// and you can use AppRoutingModule as the central place to maintain future routing configuration.

// Look at the module imports array.
//  Notice that the AppRoutingModule is last. Most importantly, it comes after the EmpListModule.

//more detail read blog <Module import order matters> https://angular.io/guide/router#module-import-order-matters
import { NgModule } from '@angular/core';
import {EmpListRoutingModule} from './empList.route';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {DetailComponent} from './detail/detail.component';
import {ListComponent} from './list/list.component';
import { EmpstoreService } from './service/empstore.service';

@NgModule({
  declarations: [
    DetailComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule, EmpListRoutingModule,  HttpModule, JsonpModule
  ],
  providers:[EmpstoreService]
})
export class EmpListModule { }

// If we dont import that BrowserModule its not work for angular core directive like *ngFor.
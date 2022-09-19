import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatIconModule} from '@angular/material/icon';
import { HomepageComponent } from './homepage';
import { AppModule } from '../app.module';

  
@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [HomepageComponent
   
  ],
  imports: [
    MatIconModule,
    AppModule
  ],
  exports: [HomepageComponent],
  providers: [],
})
export class HomePageModule { }
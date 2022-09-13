import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TitleModule } from 'src/title/title.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TitleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


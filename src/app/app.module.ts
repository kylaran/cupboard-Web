import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomepageComponent } from './HomePage/homepage';
import { HomeContentComponent } from './HomePage/home-content/home-content.component';
import { CupboardHeaderComponent } from './HomePage/cupboard-header/cupboard-header.component';
import { RouterModule } from '@angular/router';
import {SwiperModule} from 'swiper/angular';
import { SlidesComponent } from './HomePage/slides/slides.component';
import { ReviewsComponent } from './HomePage/reviews/reviews.component';
import {MatIconModule} from '@angular/material/icon';



const routes = [
  {path: '', component: HomepageComponent}
]

@NgModule({ 
  declarations: [
    AppComponent,
    HomeContentComponent,
    CupboardHeaderComponent,
    SlidesComponent,
    ReviewsComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SwiperModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


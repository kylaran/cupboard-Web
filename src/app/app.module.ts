import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomepageComponent } from './HomePage/homepage';
import { HomeContentComponent } from './HomePage/home-content/home-content.component';
import { CupboardHeaderComponent } from './HomePage/cupboard-header/cupboard-header.component';
import { RouterModule } from '@angular/router';
import {SwiperModule} from 'swiper/angular';
import { ReviewsComponent } from './HomePage/reviews/reviews.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeFeedbackComponent } from './HomePage/home-feedback/home-feedback.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { DetailsPage } from './HomePage/DetailsPage/detailspage';


const routes = [
  {path: '', component: HomepageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomeContentComponent,
    CupboardHeaderComponent,
    ReviewsComponent,
    HomeFeedbackComponent,
    ServicesComponent, 
    DetailsPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SwiperModule,
    MatIconModule,
    FormsModule, 
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }


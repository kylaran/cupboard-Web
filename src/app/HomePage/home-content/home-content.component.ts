import { Component, OnInit } from '@angular/core';
import { SwiperOptions  } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})

export class HomeContentComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView:1,
setWrapperSize:true,
    navigation:true,
    spaceBetween: 30
  };

  constructor() { }

  ngOnInit(): void {
  }
  slides(i: number) {
    return new Array(i);
}
}

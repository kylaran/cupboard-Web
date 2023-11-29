import { Component, OnInit } from '@angular/core';
import { SwiperOptions  } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})

export class GalleryPage implements OnInit {

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
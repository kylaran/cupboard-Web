import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})

export class SlidesComponent implements OnInit {
  slides$ = new BehaviorSubject<string[]>(['']);

  constructor() { }

  ngOnInit(): void {
    this.slides$.next(
      Array.from({length:600}).map((el, index) => 'slide ${index + 1}')
    );
  }

}

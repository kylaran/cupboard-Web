import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {HomeFeedback} from 'src/services/objectViews';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-home-feedback',
  templateUrl: './home-feedback.component.html',
  styleUrls: ['./home-feedback.component.css'],
  animations:[
    trigger('popup',[
      transition( 'void<=>*',[
        style({ opacity:0}),
        animate(500,style({ backgroundColor:'white',opacity:1}))
      ])
    ])
  ]
})
export class HomeFeedbackComponent implements OnInit {
  popup = false
  @Output() close = new  EventEmitter<void>()
  
  
  constructor() {
   }
  


  ngOnInit(): void {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {HomeFeedback} from 'src/services/objectViews';


@Component({
  selector: 'app-home-feedback',
  templateUrl: './home-feedback.component.html',
  styleUrls: ['./home-feedback.component.css']
})
export class HomeFeedbackComponent implements OnInit {
  popup = false
  @Output() close = new  EventEmitter<void>()
  
  
  constructor() {
   }
  


  ngOnInit(): void {
  }

}

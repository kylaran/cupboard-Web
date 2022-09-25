import { Component, OnInit } from '@angular/core';
import {HomeFeedback} from 'src/services/objectViews';

@Component({
  selector: 'app-home-feedback',
  templateUrl: './home-feedback.component.html',
  styleUrls: ['./home-feedback.component.css']
})
export class HomeFeedbackComponent implements OnInit {
  feedback: HomeFeedback = {
    phone: 0,
    message: ""
  };
  addFeedbackStatus = '';

  constructor() { }
  addFeedback(){
this.addFeedbackStatus = 'Введите номер телефона';
  }

  ngOnInit(): void {
  }

}

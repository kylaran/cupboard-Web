import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Reviews} from "src/services/objectViews"


@Component({
  selector: 'app-detailspage',
  templateUrl: 'detailspage.html',
  styleUrls: ['detailspage.css']
})
export class DetailsPage implements OnInit {
  popup = false
  @Output() close = new  EventEmitter<void>()
  
  constructor() { }
  ngOnInit(): void {
    
  }
}

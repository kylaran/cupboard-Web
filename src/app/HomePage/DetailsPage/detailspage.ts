import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Reviews} from "src/services/objectViews"


@Component({
  selector: 'app-detailspage',
  templateUrl: 'detailspage.html',
  styleUrls: ['detailspage.css'],
  animations:[
    trigger('popup',[
      transition( 'void=>*',[
        style({ opacity:0}),
        animate(500,style({ backgroundColor:'white',opacity:1}))
      ])
    ]),
    trigger('img-furniture',[
      transition('img-furniture<=>img-furniture1',
        animate("5s")
      )
    ])
  ]
})
export class DetailsPage implements OnInit {
  popup = false
  @Output() close = new  EventEmitter<void>()
  
  constructor() { }
  ngOnInit(): void {
    
  }
}

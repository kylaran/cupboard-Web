import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-cupboard-header',
  templateUrl: './cupboard-header.component.html',
  styleUrls: ['./cupboard-header.component.css']
})
export class CupboardHeaderComponent implements OnInit {
  modal = false;

  constructor() { }

  ngOnInit(): void {
  }

}

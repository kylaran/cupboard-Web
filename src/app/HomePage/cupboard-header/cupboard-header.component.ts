import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cupboard-header',
  templateUrl: './cupboard-header.component.html',
  styleUrls: ['./cupboard-header.component.css']
})
export class CupboardHeaderComponent implements OnInit {
  modal1 = false;
  modal2 = false;

  constructor() { }

  ngOnInit(): void {
  }

}

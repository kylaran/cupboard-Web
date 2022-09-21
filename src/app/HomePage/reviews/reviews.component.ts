import { Stars, Reviews } from 'src/services/objectViews';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Reviews ={
    name: "",
    email: "",
    stars: 0,
    message: ""
  };
  stars: Stars[] = new Array(5);

  constructor() {
   }

  ngOnInit(): void {

    this.stars =[
      {selected: false,
      star: "star_border"},
      {selected: false,
      star: "star_border"},
      {selected: false,
      star: "star_border"},
      {selected: false,
      star: "star_border"},
      {selected: false,
      star: "star_border"}];
  }

  click1Star(){
    for (let i = 0; i < this.stars.length; i++)
    {
      if (i < 1)
      {
        this.stars[i].selected = true;
        this.stars[i].star = "star";
      }
      else {
        this.stars[i].selected = false;
        this.stars[i].star = "star_border";
      }
    }
  }
  click2Star(){
    for (let i = 0; i < this.stars.length; i++)
    {
      if (i < 2)
      {
        this.stars[i].selected = true;
        this.stars[i].star = "star";
      }
      else {
        this.stars[i].selected = false;
        this.stars[i].star = "star_border";
      }
    }
  }
  click3Star(){
    for (let i = 0; i < this.stars.length; i++)
    {
      if (i < 3 )
      {
        this.stars[i].selected = true;
        this.stars[i].star = "star";
      }
      else {
        this.stars[i].selected = false;
        this.stars[i].star = "star_border";
      }
    }
  }
  click4Star(){
    for (let i = 0; i < this.stars.length; i++)
    {
      if (i < 4 )
      {
        this.stars[i].selected = true;
        this.stars[i].star = "star";
      }
      else {
        this.stars[i].selected = false;
        this.stars[i].star = "star_border";
      }
    }
  }
  click5Star(){
    for (let i = 0; i < this.stars.length; i++)
    {
      if (i < 5 )
      {
        this.stars[i].selected = true;
        this.stars[i].star = "star";
      }
      else {
        this.stars[i].selected = false;
        this.stars[i].star = "star_border";
      }
    }
  }
}

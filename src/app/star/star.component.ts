import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() rating;
  ratingWidth:number;
  constructor() { 
    
  }

  ngOnInit() {
    console.log(`rating value is ${this.rating}`);
    this.ratingWidth = this.rating * 65/5;
  }

}

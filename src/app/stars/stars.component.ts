import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  stars: boolean[];
  @Input()
 rating: number;
  constructor() { }

  ngOnInit() {
    this.stars = [];
    for ( let i = 1; i <= 5 ; i++) {
      this.stars.push(i > this.rating);
    }
    // this.stars = [true, true, true, true, false];
  }

}
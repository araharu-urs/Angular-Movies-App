import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input() rating: number = 0;
  @Input() disabled: boolean = false;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

  hovered: number = 0;
  stars: number[] = [1, 2, 3, 4, 5,6,7,8,9,10];

  rate(rating: number) {
    this.rating = rating;
    this.ratingChange.emit(this.rating);
  }

  hover(index: number) {
    this.hovered = index;
  }

  leave() {
    this.hovered = 0;
  }
}

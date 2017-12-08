import { Component, Input } from '@angular/core';
import { YelpReview } from '../../yelp-review';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'yelp-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class YelpReviewComponent {
  @Input() review: YelpReview;
}
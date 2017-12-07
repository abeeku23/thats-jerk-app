import { Component } from '@angular/core';
import { YelpReview } from '../yelp-review';
import { YelpReviews } from '../yelp-reviews';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'yelp',
  templateUrl: './yelp.component.html',
  styleUrls: ['./yelp.component.css']
})

export class YelpComponent implements OnInit{
  reviews: YelpReview[];

  ngOnInit(): void {
    this.reviews = YelpReviews;
  }
}
import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/model/review.model';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styleUrls: ['./list-review.component.css']
})
export class ListReviewComponent implements OnInit {
  reviewById : Review;
  reviews: Array<Review> = [];

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.findAllReviews();
    this.findReviewById(13); //revenire, harcodede value
  }

  findAllReviews() {
    this.reviewService.getAllReviews()
      .subscribe(x => this.reviews = x);
  }

  findReviewById(reviewId: number): void {
    this.reviewService.getReviewById(reviewId)
      .subscribe(x => this.reviewById = x);
  }

}

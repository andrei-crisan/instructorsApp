import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Review } from 'src/app/model/review.model';
import { ReviewService } from 'src/app/service/review.service';
import { DataReviewComponent } from '../data-review/data-review.component';

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styleUrls: ['./list-review.component.css']
})
export class ListReviewComponent implements OnInit {
  selectorReview: boolean = false;
  reviewById: Review;
  reviews: Array<Review> = [];

  constructor(private location: Location, private reviewService: ReviewService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.findAllReviews();
  }

  findAllReviews() {
    this.reviewService.getAllReviews()
      .subscribe(x => this.reviews = x);
  }

  findReviewById(reviewId: number) {
    this.reviewService.getReviewById(reviewId)
      .subscribe(x => this.reviewById = x);
  }

  deleteSelectedReview(reviewId) {
    this.reviewService.deleteReviewById(reviewId)
      .subscribe(_ => console.log("Ok!"));
    this.location.back();

  }

  openDataModalComponent(review) {
    this.matDialog.open(DataReviewComponent, { data: review });
  }

  showReviews() {
    if (this.selectorReview) {
      this.selectorReview=false;
    } else {
     this.selectorReview=true;
    }
  }


}

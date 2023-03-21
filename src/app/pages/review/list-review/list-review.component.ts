import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Review } from 'src/app/model/review.model';
import { ReviewService } from 'src/app/service/review.service';
import { DataSchoolComponent } from '../../school/data-school/data-school.component';

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styleUrls: ['./list-review.component.css']
})
export class ListReviewComponent implements OnInit {
  reviewById: Review;
  reviews: Array<Review> = [];

  constructor(private reviewService: ReviewService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.findAllReviews();
    this.findReviewById(13); //revenire, harcodede value
  }

  findAllReviews() {
    this.reviewService.getAllReviews()
      .subscribe(x => this.reviews = x);
  }

  findReviewById(reviewId: number) {
    this.reviewService.getReviewById(reviewId)
      .subscribe(x => this.reviewById = x);
  }

  openDataModalComponent() {
    this.matDialog.open(DataSchoolComponent);
  }

}

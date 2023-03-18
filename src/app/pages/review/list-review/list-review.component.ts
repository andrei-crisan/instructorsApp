import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/model/review.model';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styleUrls: ['./list-review.component.css']
})
export class ListReviewComponent implements OnInit {
  reviews: Array<Review> = [];
  constructor(private reviewService : ReviewService) { }

  ngOnInit(): void {
    this.findAllReviews();
  }

  findAllReviews(){
    this.reviewService.getAllReviews()
    .subscribe(x => this.reviews = x);
 }

}

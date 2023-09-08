import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Review } from 'src/app/model/review.model';
import { ReviewService } from 'src/app/service/review.service';
import { DataReviewComponent } from '../data-review/data-review.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styleUrls: ['./list-review.component.css']
})
export class ListReviewComponent implements OnInit, AfterViewInit {
  trackerItems = new MatTableDataSource<Review>;
  selectorReview: boolean = false;
  reviewById: Review;
  reviews: Array<Review> = [];
  searchKey: string;
  displayedColumns: string[] = ['id', 'review', 'instructor', 'rating', 'actions'];
  searchResponseParameter: number;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private reviewService: ReviewService,
    private matDialog: MatDialog,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getResponseFromSearchComponent();
    this.findAllReviews();
  }

  ngAfterViewInit(): void {
    this.trackerItems.paginator = this.paginator;
  }

  findAllReviews() {
    this.reviewService.getAllReviews()
      .subscribe(x => this.reviews = x);
  }

  findReviewById(reviewId: number) {
    this.reviewService.getReviewById(reviewId)
      .subscribe(x => this.reviewById = x);
  }

  deleteSelectedReview(reviewId: number) {
    if (confirm("Are you sure?")) {
      this.reviewService.deleteReviewById(reviewId)
        .subscribe(_ => console.log("Ok!"));
    }
    location.reload();
  }

  openDataModalComponent(review: Review) {
    this.matDialog.open(DataReviewComponent, { data: review });
  }

  showReviews() {
    if (this.selectorReview) {
      this.selectorReview = false;
    } else {
      this.selectorReview = true;
    }
  }

  getResponseFromSearchComponent() {
    if (this.activatedRoute.snapshot.params['id'] > 0) {
      this.searchResponseParameter = this.activatedRoute.snapshot.params['id'];
      this.reviewService.getReviewById(this.searchResponseParameter)
        .subscribe(x => this.reviewById = x);
    } else {
      this.searchResponseParameter = 0;
    }
  }

}

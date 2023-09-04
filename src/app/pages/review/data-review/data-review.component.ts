import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Instructor } from 'src/app/model/instructor.mode';
import { Review } from 'src/app/model/review.model';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-data-review',
  templateUrl: './data-review.component.html',
  styleUrls: ['./data-review.component.css']
})
export class DataReviewComponent implements OnInit {

  constructor(
    private reviewService: ReviewService,
    private matDialog: MatDialogRef<DataReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  selectedReview: Review = this.data;
  decodifedRating : string = this.selectedReview.experienceRating == 2 ? 'positive' : 'negative';
  ratingSentiment: string[] = ['positive', 'negative'];

  ngOnInit(): void {
  }

  updateReview(instructorReview: string, experienceRating: string) {

    let instructor: Instructor = {
      id: this.selectedReview.instructor?.id,
      instructorName: this.selectedReview.instructor?.instructorName,
      instructorSurname: this.selectedReview.instructor?.instructorSurname,
      drivingSchoolName: this.selectedReview.instructor?.drivingSchoolName,
      drivingSchoolAddress: this.selectedReview.instructor?.drivingSchoolAddress
    }

    let experienceRatingToSend: number = experienceRating == 'positive' ? 2 : 1;

    let reviewToSave: Review = {
      id: this.selectedReview.id,
      instructorReview,
      experienceRating: experienceRatingToSend,
      instructor: instructor
    }


    this.reviewService.updateReview(reviewToSave)
      .subscribe(_ => console.log("ok"));

    this.closeModalComponent();
    location.reload();
  }

  closeModalComponent() {
    this.matDialog.close();
  }

  

}

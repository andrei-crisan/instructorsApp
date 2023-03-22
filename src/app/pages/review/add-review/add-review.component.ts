import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/model/instructor.mode';
import { Review } from 'src/app/model/review.model';
import { School } from 'src/app/model/school.model';
import { ReviewService } from 'src/app/service/review.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  ratingSentiment: string[] = ['positive', 'negative'];

  constructor(private reviewService: ReviewService, private matDialog: MatDialogRef<AddReviewComponent>) { }

  ngOnInit(): void {
  }

  closeModalComponent() {
    this.matDialog.close();
  }

  saveReview(
    instructorReview: string,
    experienceRating: string,
    instructorName: string,
    instructorSurname: string,
    drivingSchoolName: string,
    drivingSchoolAddress: string) {

      let experienceRatingToSend : number  = 0;

      if(experienceRating == 'positive'){
        experienceRatingToSend = 2;
      } else {
        experienceRatingToSend = 1;
      }

    var ara: Review[] = [];

    let drivingSchool: School = { drivingSchoolName, drivingSchoolAddress }
    let instructor: Instructor = { instructorName, instructorSurname, reviews: ara, drivingSchoolName, drivingSchoolAddress };
    let reviewToSave: Review = { instructorReview, experienceRating: experienceRatingToSend, instructor: instructor }

    this.reviewService.saveReview(reviewToSave)
      .subscribe(_ => console.log("ok"));

    this.closeModalComponent();
  }
}

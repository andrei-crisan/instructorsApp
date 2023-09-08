import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Instructor } from 'src/app/model/instructor.mode';

@Component({
  selector: 'app-details-instructor',
  templateUrl: './details-instructor.component.html',
  styleUrls: ['./details-instructor.component.css']
})
export class DetailsInstructorComponent implements OnInit {

  constructor(
    private matDialog: MatDialogRef<DetailsInstructorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  selectedInstructor: Instructor = this.data;
  ratingNegative: number = 0;
  ratingNegativ: number = 0;
  positiveReviewsPercentage: number = 0;
  negativeReviewsPercentage: number = 0;

  ngOnInit(): void {
    console.log(this.selectedInstructor.drivingSchoolName);
    this.statsForReviews();
  }

  statsForReviews() {
    const totalReviews: any = this.selectedInstructor.reviews?.length;
    let ratingPozitive: number = 0;
    let ratingNegative: number = 0;

    this.selectedInstructor.reviews?.forEach((x) => {
      if (x.experienceRating == 2) {
        ratingPozitive++;
      } else {
        ratingNegative++;
      }
    })
    this.positiveReviewsPercentage = ratingPozitive / totalReviews * 100;
    this.negativeReviewsPercentage = ratingNegative / totalReviews * 100;
  }

  closeModalComponent() {
    this.matDialog.close();
  }

}

import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/model/instructor.mode';
import { Review } from 'src/app/model/review.model';
import { School } from 'src/app/model/school.model';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  constructor(private reviewService : ReviewService) { }

  ngOnInit(): void {
  }

  
  saveReview(
    instructorReview: string, 
    experienceRating: number, 
    instructorName : string, 
    instructorSurname : string, 
    drivingSchoolName : string, 
    drivingSchoolAddress : string) {

     var ara : Review[] = [];
    
     let drivingSchool : School = {drivingSchoolName, drivingSchoolAddress}
     let instructor : Instructor = {instructorName, instructorSurname, reviews: ara, drivingSchool};
     let reviewToSave : Review = {instructorReview, experienceRating, instructor : instructor}
 
     this.reviewService.saveReview(reviewToSave)
       .subscribe(_ => console.log("ok"));

       //TODO: VERIFICARE CONSISTENTA DATE INAINTE DE SUBSCRIBE!!
   }
}

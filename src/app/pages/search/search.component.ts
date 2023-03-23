import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Instructor } from 'src/app/model/instructor.mode';
import { Review } from 'src/app/model/review.model';
import { InstructorService } from 'src/app/service/instructor.service';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  instructors: Instructor[] = [];

  constructor(
    private router: Router, 
    private matDialogRef : MatDialogRef<SearchComponent>, private instructorService: InstructorService) { }

  ngOnInit(): void {
    this.searchFor();
  }

  findEntity(entityId) {
    this.router.navigateByUrl('/instructors/'.concat(entityId));
    this.getBack();
  }

  getBack() {
    console.log(this.instructors.filter(i => i.instructorName == 'marcel'));
    this.matDialogRef.close();

  }

  searchFor(){ 
      this.instructorService.getAllInstructor()
        .subscribe(x => this.instructors = x);

    }
}
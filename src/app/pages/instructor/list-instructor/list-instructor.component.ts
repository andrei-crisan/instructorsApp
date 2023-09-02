import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Instructor } from 'src/app/model/instructor.mode';
import { InstructorService } from 'src/app/service/instructor.service';
import { DataInstructorComponent } from '../data-instructor/data-instructor.component';
import { DetailsInstructorComponent } from '../details-instructor/details-instructor.component';

@Component({
  selector: 'app-list-instructor',
  templateUrl: './list-instructor.component.html',
  styleUrls: ['./list-instructor.component.css']
})
export class ListInstructorComponent implements OnInit {
  instructorById: Instructor;
  instructors: Array<Instructor> = [];
  searchResponseParameter: number;
  searchKey : string;

  constructor(
    private instructorService: InstructorService,
    private matDialog: MatDialog,
    private location: Location,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getResponseFromSearchComponent();
    this.findAllInstructors();
  }

  findAllInstructors() {
    this.instructorService.getAllInstructor()
      .subscribe(x => this.instructors = x);
      console.log(this.instructors);
  }

  findInstructorById(instructorId: number) {
    this.instructorService.getInstructorById(instructorId)
      .subscribe(x => this.instructorById = x);
  }

  deleteSelectedInstructor(instructorId) {
    if(confirm("Are you sure?")){
    this.instructorService.deleteInstructor(instructorId)
      .subscribe(_ => console.log("Ok!"));
    }
      location.reload();
  }

  openDataModalComponent(instructor) {
    this.matDialog.open(DataInstructorComponent, { data: instructor });
  }
  openDetailsModaComponent(instructor: Instructor) {
    if (instructor.reviews?.length != 0) {
      this.matDialog.open(DetailsInstructorComponent, { data: instructor });
    }
  }

  getResponseFromSearchComponent() {
    if (this.activatedRoute.snapshot.params['id'] > 0) {
      this.searchResponseParameter = this.activatedRoute.snapshot.params['id'];
      this.instructorService.getInstructorById(this.searchResponseParameter)
        .subscribe(x => this.instructorById = x);
    } else {
      this.searchResponseParameter = 0;
    }
  }

}
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(
    private instructorService: InstructorService,
    private matDialog: MatDialog,
    private location: Location) { }

  ngOnInit(): void {
    this.findAllInstructors();
    this.findInstructorById(5);
  }

  findAllInstructors() {
    this.instructorService.getAllInstructor()
      .subscribe(x => this.instructors = x);
  }

  findInstructorById(instructorId: number) {
    this.instructorService.getInstructorById(instructorId)
      .subscribe(x => this.instructorById = x);
  }

  deleteSelectedInstructor(instructorId) {
    this.instructorService.deleteInstructor(instructorId)
      .subscribe(_ => console.log("Ok!"));
    this.location.back();
  }

  openDataModalComponent(instructor) {
    this.matDialog.open(DataInstructorComponent, { data: instructor });
  }
  openDetailsModaComponent(instructor: Instructor) {
    if (instructor.reviews?.length != 0) {
      this.matDialog.open(DetailsInstructorComponent, { data: instructor });
    }
  }

}
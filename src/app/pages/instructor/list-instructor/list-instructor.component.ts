import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Instructor } from 'src/app/model/instructor.mode';
import { InstructorService } from 'src/app/service/instructor.service';
import { DataInstructorComponent } from '../data-instructor/data-instructor.component';

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
    private matDialog: MatDialog) { }

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

  openDataModalComponent(instructor) {
    this.matDialog.open(DataInstructorComponent, {data: instructor});
  }

}
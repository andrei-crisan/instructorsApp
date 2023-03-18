import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Instructor } from 'src/app/model/instructor.mode';

@Component({
  selector: 'app-list-instructor',
  templateUrl: './list-instructor.component.html',
  styleUrls: ['./list-instructor.component.css']
})
export class ListInstructorComponent implements OnInit {
  instructorById: Instructor;
  instructors: Array<Instructor> = [];

  constructor() { }

  ngOnInit(): void {
  }



}

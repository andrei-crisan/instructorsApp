import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/model/instructor.mode';
import { InstructorService } from 'src/app/service/instructor.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  instructors: Instructor[] = [];

  constructor(
    private router: Router,
    private matDialogRef: MatDialogRef<SearchComponent>, private instructorService: InstructorService,
    @Inject(MAT_DIALOG_DATA) public data: number) { }

  ngOnInit(): void {
  }

  findEntity(entityId: number) {
    switch (this.data) {
      case 1:
        this.router.navigateByUrl(`/reviews/${entityId}`);
        this.getBack();
        break;
      case 2:
        this.router.navigateByUrl(`/instructors/${entityId}`);
        this.getBack();
        break;
      case 3:
        this.router.navigateByUrl(`/schools/${entityId}`);
        this.getBack();
        break;
    }
  }

  getBack() {
    this.matDialogRef.close();
  }

 
}
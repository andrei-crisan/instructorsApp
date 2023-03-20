import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Select } from 'src/app/model/select.model';
import { AddInstructorComponent } from '../instructor/add-instructor/add-instructor.component';
import { AddReviewComponent } from '../review/add-review/add-review.component';
import { AddSchoolComponent } from '../school/add-school/add-school.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public entityDropDownList: Select[] = [
    { id: 1, entityName: 'Reviews' },
    { id: 2, entityName: 'Instructors' },
    { id: 3, entityName: 'Schools' },
  ];

  public selectedEntity: number = 1;

  constructor(private router: Router, private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModalComponent() {
    if (this.selectedEntity == 1) {
      this.matDialog.open(AddReviewComponent);
    }
    if (this.selectedEntity == 2) {
      this.matDialog.open(AddInstructorComponent);
    }
    if (this.selectedEntity == 3) {
      this.matDialog.open(AddSchoolComponent);
    }
  }
  closeModalComponents(){


  }

  showList() {
    if (this.selectedEntity == 1) {
      this.router.navigateByUrl("/reviews");
    }
    if (this.selectedEntity == 2) {
      this.router.navigateByUrl("/instructors");
    }
    if (this.selectedEntity == 3) {
      this.router.navigateByUrl("/schools");
    }
  }

}

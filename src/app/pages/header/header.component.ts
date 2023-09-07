import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { AddInstructorComponent } from '../instructor/add-instructor/add-instructor.component';
import { AddReviewComponent } from '../review/add-review/add-review.component';
import { AddSchoolComponent } from '../school/add-school/add-school.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private matDialog: MatDialog, public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  openAddEntityComponent(menuOption: number) {
    if (menuOption == 1) {
      this.matDialog.open(AddReviewComponent);
    }
    if (menuOption == 2) {
      this.matDialog.open(AddInstructorComponent);
    }
    if (menuOption == 3) {
      this.matDialog.open(AddSchoolComponent);
    }
  }

  showList(menuOption: number) {
    if (menuOption == 1) {
      this.router.navigateByUrl("/reviews");
    }
    if (menuOption == 2) {
      this.router.navigateByUrl("/instructors");
    }
    if (menuOption == 3) {
      this.router.navigateByUrl("/schools");
    }
  }

  openModalSearchComponent(option: number) {
    this.matDialog.open(SearchComponent, {
      data: option
    });
  }

  logout() {
    if (confirm("Logging out?")) {
      localStorage.removeItem('instructors auth');
      location.reload();
    }
  }
}

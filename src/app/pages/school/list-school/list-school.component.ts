import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { School } from 'src/app/model/school.model';
import { SchoolService } from 'src/app/service/school.service';
import { DataSchoolComponent } from '../data-school/data-school.component';
import { DetailsSchoolComponent } from '../details-school/details-school.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-list-school',
  templateUrl: './list-school.component.html',
  styleUrls: ['./list-school.component.css']
})
export class ListSchoolComponent implements OnInit {
  schoolByid: School;
  schools: Array<School> = [];
  searchKey: string;
  searchResponseParameter: number;

  constructor(
    private schoolService: SchoolService,
    private matDialog: MatDialog,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getResponseFromSearchComponent();
    this.findAllDrivingSchools();
  }

  findAllDrivingSchools() {
    this.schoolService.getAllDrivingSchools()
      .subscribe(x => this.schools = x);
  }

  findDrivingSchoolById(schoolId: number) {
    this.schoolService.getDrivingSchoolById(schoolId)
      .subscribe(x => this.schoolByid = x);
  }

  deleteSelectedDrivingSchool(drivingSchoolId) {
    if(confirm("Are you sure?")){
    this.schoolService.deleteDrivingSchoolById(drivingSchoolId)
      .subscribe(_ => console.log("Ok!"));
    }
      location.reload();
  }

  openDataModalComponent(schoolId) {
    console.log(schoolId);
    this.matDialog.open(DataSchoolComponent, { data: schoolId });
  }

  openDetailsModalComponent(school: School) {
    if (school.instructors?.length != 0) {
      this.matDialog.open(DetailsSchoolComponent, { data: school });
    }
  }

  getResponseFromSearchComponent() {
    if (this.activatedRoute.snapshot.params['id'] > 0) {
      this.searchResponseParameter = this.activatedRoute.snapshot.params['id'];
      this.schoolService.getDrivingSchoolById(this.searchResponseParameter)
        .subscribe(x => this.schoolByid = x);
    } else {
      this.searchResponseParameter = 0;
    }
  }

}

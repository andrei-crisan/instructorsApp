import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { School } from 'src/app/model/school.model';
import { SchoolService } from 'src/app/service/school.service';
import { DataSchoolComponent } from '../data-school/data-school.component';

@Component({
  selector: 'app-list-school',
  templateUrl: './list-school.component.html',
  styleUrls: ['./list-school.component.css']
})
export class ListSchoolComponent implements OnInit {
  schoolByid: School;
  schools: Array<School> = [];

  constructor(private schoolService : SchoolService, private matDialog: MatDialog) { }

  ngOnInit(): void {
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

  openDataModalComponent(schoolId) {
    console.log(schoolId);
    this.matDialog.open(DataSchoolComponent, {data: schoolId});

    // data: { person: {name: nameInput, email: emailInput }
  }

}

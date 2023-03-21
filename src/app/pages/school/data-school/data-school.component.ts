import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { School } from 'src/app/model/school.model';
import { SchoolService } from 'src/app/service/school.service';

@Component({
  selector: 'app-data-school',
  templateUrl: './data-school.component.html',
  styleUrls: ['./data-school.component.css']
})
export class DataSchoolComponent implements OnInit {

  constructor(
    private schoolService: SchoolService,
    private matDialog: MatDialogRef<DataSchoolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  selectedSchool : School = this.data;

  ngOnInit(): void {
    console.log(this.selectedSchool.drivingSchoolName);
  }

  closeModalComponent() {
    this.matDialog.close();
  }

  updateDrivingSchool(
    drivingSchoolName: string,
    drivingSchoolAddress: string) {

    let drivingSchool: School = { id: this.selectedSchool.id, drivingSchoolName, drivingSchoolAddress }

    this.schoolService.updateDrivingSchool(drivingSchool)
      .subscribe(_ => console.log("Ok!"));

    this.closeModalComponent();
  }


}

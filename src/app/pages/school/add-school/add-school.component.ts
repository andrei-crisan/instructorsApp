import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { School } from 'src/app/model/school.model';
import { SchoolService } from 'src/app/service/school.service';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {
  //private matDialog: MatDialogRef<AddReviewComponent>
  constructor(private schoolService: SchoolService, private matDialog: MatDialogRef<AddSchoolComponent>) { }

  ngOnInit(): void {
  }

  closeModalComponent() {
    this.matDialog.close();
  }

  saveDrivingSchool(
    drivingSchoolName: string,
    drivingSchoolAddress: string) {

    let drivingSchool: School = { drivingSchoolName, drivingSchoolAddress }

    this.schoolService.saveDrivingSchool(drivingSchool)
      .subscribe(_ => console.log("Ok!"));

    this.closeModalComponent();
  }

}

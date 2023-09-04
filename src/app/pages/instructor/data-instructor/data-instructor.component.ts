import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Instructor } from 'src/app/model/instructor.mode';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-data-instructor',
  templateUrl: './data-instructor.component.html',
  styleUrls: ['./data-instructor.component.css']
})
export class DataInstructorComponent implements OnInit {

  constructor(
    private instructorService: InstructorService,
    private matDialog: MatDialogRef<DataInstructorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  selectedInstructor: Instructor = this.data;

  ngOnInit(): void {
  }

  closeModalComponent() {
    this.matDialog.close();

  }

  updateInstructor(
    instructorName: string,
    instructorSurname: string,
    drivingSchoolName: string,
    drivingSchoolAddress: string) {

    let instructor: Instructor = {
      id: this.selectedInstructor.id,
      instructorName,
      instructorSurname,
      drivingSchooldId: this.selectedInstructor.
        drivingSchooldId,
      drivingSchoolName,
      drivingSchoolAddress
    };

    this.instructorService.updateInstructor(instructor)
      .subscribe(_ => console.log("Ok!"));

    this.closeModalComponent();
    location.reload();
  }

}

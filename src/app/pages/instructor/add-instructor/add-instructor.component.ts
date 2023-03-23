import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Instructor } from 'src/app/model/instructor.mode';
import { School } from 'src/app/model/school.model';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.css']
})
export class AddInstructorComponent implements OnInit {

  constructor(private instructorService: InstructorService, private matDialog: MatDialogRef<AddInstructorComponent>) { }

  ngOnInit(): void {
  }

  closeModalComponent() {
    this.matDialog.close();
  }

  saveInstructor(
    instructorName: string,
    instructorSurname: string,
    drivingSchoolName: string,
    drivingSchoolAddress: string) {

    // let drivingSchool: School = { drivingSchoolName, drivingSchoolAddress }
    let instructor: Instructor = { instructorName, instructorSurname, drivingSchoolName, drivingSchoolAddress };

    this.instructorService.saveInstructor(instructor)
      .subscribe(_ => console.log("Ok!"));

    this.closeModalComponent();
    location.reload();
  }

  //TODO: VERIFICARE CONSISTENTA OBIECT, INSTRUCTOR DEPENDENT DE SCOALA;

}

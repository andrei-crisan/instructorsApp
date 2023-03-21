import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Instructor } from 'src/app/model/instructor.mode';

@Component({
  selector: 'app-details-instructor',
  templateUrl: './details-instructor.component.html',
  styleUrls: ['./details-instructor.component.css']
})
export class DetailsInstructorComponent implements OnInit {

  constructor(
    private matDialog : MatDialogRef<DetailsInstructorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    selectedInstructor : Instructor = this.data;
    

  ngOnInit(): void {
  }

  closeModalComponent() {
    this.matDialog.close();

    //TODO: TO IMPLEMENT CLOSE BUTTOn
  }

}

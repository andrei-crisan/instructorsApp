import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { School } from 'src/app/model/school.model';

@Component({
  selector: 'app-details-school',
  templateUrl: './details-school.component.html',
  styleUrls: ['./details-school.component.css']
})
export class DetailsSchoolComponent implements OnInit {

  constructor(matDialog : MatDialogRef<DetailsSchoolComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  selectedSchool: School = this.data;

  ngOnInit(): void {
    console.log(this.selectedSchool);
  }

}

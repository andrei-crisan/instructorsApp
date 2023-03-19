import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/model/school.model';
import { SchoolService } from 'src/app/service/school.service';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
  }

  saveDrivingSchool(
    drivingSchoolName: string,
    drivingSchoolAddress: string) {

    let drivingSchool: School = { drivingSchoolName, drivingSchoolAddress }

    this.schoolService.saveDrivingSchool(drivingSchool)
      .subscribe(_ => console.log("Ok!"));
  }

}

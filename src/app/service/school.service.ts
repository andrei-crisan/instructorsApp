import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from '../model/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private schoolRestUrl = 'http://instructors.azurewebsites.net/schools';

  constructor(private httpClient: HttpClient) { }

  getAllDrivingSchools(): Observable<School[]> {
    return this.httpClient.get<Array<School>>(this.schoolRestUrl);
  }

  getDrivingSchoolById(reviewId: number): Observable<School> {
    const schoolRestUrlFindOne = `${this.schoolRestUrl}/${reviewId}`;
    return this.httpClient.get<School>(schoolRestUrlFindOne);
  }

  saveDrivingSchool(school: School): Observable<School> {
    return this.httpClient
      .post<School>(this.schoolRestUrl, school);
  }

  updateDrivingSchool(review: School): Observable<School> {
    return this.httpClient
      .put<School>(this.schoolRestUrl, review);
  }

  deleteDrivingSchoolById(reviewId: number): Observable<School> {
    const schoolRestUrlDeleteOne = `${this.schoolRestUrl}/rm/${reviewId}`;
    return this.httpClient.delete<School>(schoolRestUrlDeleteOne);
  }  
}


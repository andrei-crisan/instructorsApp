import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instructor } from '../model/instructor.mode';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private instructorRestUrl = 'http://instructors.azurewebsites.net/instructors';

  constructor(private httpClient: HttpClient) { }

  getAllInstructor(): Observable<Instructor[]> {
    return this.httpClient
      .get<Array<Instructor>>(this.instructorRestUrl);
  }

  getInstructorById(instructorId: number): Observable<Instructor> {
    const instructorRestUrlFindOne = `${this.instructorRestUrl}/${instructorId}`;
    return this.httpClient
      .get<Instructor>(instructorRestUrlFindOne);
  }

  saveInstructor(instructor: Instructor): Observable<Instructor> {
    return this.httpClient
      .post<Instructor>(this.instructorRestUrl, instructor);
  }

  updateInstructor(instructor: Instructor): Observable<Instructor> {
    return this.httpClient
      .put<Instructor>(this.instructorRestUrl, instructor);
  }

  deleteInstructor(instructorId: number): Observable<Instructor> {
    const instructorRestUrlDeleteOne = `${this.instructorRestUrl}/rm/${instructorId}`;
    return this.httpClient
      .delete<Instructor>(instructorRestUrlDeleteOne);
  }
}
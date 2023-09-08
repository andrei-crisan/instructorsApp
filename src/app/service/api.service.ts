import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getAuthorized(loginData): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/auth/signin', loginData);
  }

  getRegistered(registerData): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/auth/signup', registerData);
  }
}

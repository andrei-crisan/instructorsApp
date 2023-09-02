import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  get token() {
    return localStorage.getItem('instructors auth');
  }

  constructor(private apiService: ApiService) {
    this._isLoggedIn$.next(!!this.token); //converto to boolean equivalent, daca am valoare in token sta true, altfel fals
  }

  login(formGroup: FormGroup) {
    this.apiService.getAuthorized(formGroup.value)
      .subscribe(result => {
        localStorage.setItem('instructors auth', result.token);
        this._isLoggedIn$.next(true);
      })
  }

  register(formGroup: FormGroup) {
    this.apiService.getRegistered(formGroup.value)
      .subscribe({
        next: _ => {
          alert("Done!");
          location.reload();
        },
        error: (err: any) => {
          alert("Error: " + err);
        },
      });
  }

}

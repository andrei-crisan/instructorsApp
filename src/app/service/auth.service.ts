import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { UserLogged } from '../model/user-logged.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  loggedUser!: UserLogged;

  get token() {
    return localStorage.getItem('instructors auth');
  }

  constructor(private apiService: ApiService, private route: Router) {
    this._isLoggedIn$.next(!!this.token);

  }

  login(formGroup: FormGroup) {
    this.apiService.getAuthorized(formGroup.value)
      .subscribe({
        next: result => {
          localStorage.setItem('instructors auth', result.token);
          this.loggedUser = this.getLoggedUser(JSON.stringify(result.token));
          this._isLoggedIn$.next(true);
          this.route.navigate(['/reviews']);
        },
        error: () => {
          alert("Bad credentials!");
          location.reload();
        }
      });
  }

  register(formGroup: FormGroup) {
    this.apiService.getRegistered(formGroup.value)
      .subscribe({
        next: _ => {
          alert("Done!");
          location.reload();
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error);
          alert(JSON.stringify(err.error.message));
        },
      });
  }

  private getLoggedUser(token: string): UserLogged {
    return JSON.parse(atob(token.split('.')[1])) as UserLogged;
  }

}

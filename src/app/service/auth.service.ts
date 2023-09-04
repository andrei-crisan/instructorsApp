import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private _hasPermission$ = new BehaviorSubject<boolean>(false);
  hasPermission$ = this._hasPermission$.asObservable();


  get token() {
    return localStorage.getItem('instructors auth');
  }

  get permission() {
    if (this.token) {
      const decodedToken: any = jwt_decode(this.token);
      const roles: string[] = decodedToken.roles;

      return roles.includes("ROLE_ADMIN");
    }
    return false;
  }

  constructor(private apiService: ApiService, private route: Router) {
    this._isLoggedIn$.next(!!this.token); 

  }

  login(formGroup: FormGroup) {
    this.apiService.getAuthorized(formGroup.value)
      .subscribe({
        next: result => {
          localStorage.setItem('instructors auth', result.token);
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

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private authService: AuthService ) { }


  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required, this.passwordMatchValidator.bind(this)])
    });
  }
  
  // Custom validator function to check if password and confirmPassword match
  passwordMatchValidator(control: FormControl): { [s: string]: boolean } | null {
    if (this.formGroup && control.value !== this.formGroup.get('password')?.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }

  register() {
    if (this.formGroup.valid) {
      this.authService.register(this.formGroup);
    }
  }


}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../services/auth/auth.service';
import { FormValidators } from '../validators/from-validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        firstName: new FormControl('', [
          Validators.required,
          FormValidators.onlyLetters,
        ]),
        lastName: new FormControl('', [
          Validators.required,
          FormValidators.onlyLetters,
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
        password: new FormControl('', [
          Validators.required,
          // Minimum 8 Character Password with lowercase, uppercase letters, numbers and at least one lowercase letter, one uppercase letter and one number
          Validators.pattern(
            '^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[a-zA-Z0-9]{8,}$'
          ),
        ]),
        passwordConfirm: new FormControl('', Validators.required),
      },
      { validators: FormValidators.confirmedValidator }
    );
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (
      this.signupForm.controls.email.invalid ||
      this.signupForm.controls.password.invalid ||
      this.signupForm.controls.firstName.invalid ||
      this.signupForm.controls.lastName.invalid ||
      this.signupForm.controls.passwordConfirm.invalid
    ) {
      return;
    }

    let signupRequest = {
      login: this.signupForm.get('email')?.value,
      email: this.signupForm.get('email')?.value,
      firstName: this.signupForm.get('firstName')?.value,
      lastName: this.signupForm.get('lastName')?.value,
      password: this.signupForm.get('password')?.value,
    };

    this.authService.signup(signupRequest).subscribe(
      () => {
        this.toastr.success('Rejestracja przebiegła pomyślnie.');
        this.router.navigateByUrl('/login');
      },
      () => {
        this.toastr.error('Wystąpił błąd serwera podczas rejestracji');
      }
    );
  }
}

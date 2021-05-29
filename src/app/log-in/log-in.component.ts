import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  error: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.error = undefined;

    if (this.loginForm.invalid) {
      return;
    }

    let loginRequest = {
      login: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }

    this.authService.login(loginRequest).subscribe( data => {
      if (data) {
        this.toastr.success('Logowanie przebiegło pomyślnie');

        if (this.authService.isPrivilegeUser()) {
          this.router.navigateByUrl('/dashboard');
        }
        else {
          this.router.navigateByUrl('/');
        }
      }
      else {
        this.toastr.error('Wystąpił błąd podczas logowania');
      }
    }, () => {
      this.error = "Nieprawidłowe hasło lub email";
    })
  }
}

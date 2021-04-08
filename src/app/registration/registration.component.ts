import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from '../validators/from-validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signupForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        FormValidators.onlyLetters
      ]),
      lastName: new FormControl('', [
        Validators.required,
        FormValidators.onlyLetters
      ]),
      email: new FormControl('', [
        Validators.required, 
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      password: new FormControl('', [
        Validators.required,
        // Minimum 8 Character Password with lowercase, uppercase letters, numbers and at least one lowercase letter, one uppercase letter and one number
        Validators.pattern('^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[a-zA-Z0-9]{8,}$')
      ]),
      passwordConfirm: new FormControl('', Validators.required)
    }, { validators: FormValidators.confirmedValidator });
  }

  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value));
  }

}

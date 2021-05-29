import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';

import { FieldService } from 'src/app/services/field/field.service';
import { getIdentifier, faculties, reverseIdentifier } from '../../utilities/helpers';

@Component({
  selector: 'app-dashboard-field-form',
  templateUrl: './dashboard-field-form.component.html',
  styleUrls: ['./dashboard-field-form.component.css'],
})
export class DashboardFieldFormComponent implements OnInit {
  fieldIdentifier: string;
  fieldForm!: FormGroup;
  submitted = false;
  fieldId: number;
  faculties = faculties;
  facultyKeys = Object.keys(faculties);
  selectedFile: string;

  reverseIdentifier = reverseIdentifier;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private fieldService: FieldService
  ) {
    this.fieldIdentifier = this.activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.fieldForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      faculty: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      benefits: new FormControl('', [Validators.required]),
      file: new FormControl('', [Validators.required])
    });

    if (this.fieldIdentifier !== undefined) {
      this.getField();
    }
  }

  get f() {
    return this.fieldForm.controls;
  }

  onBackClick() {
    this.router.navigateByUrl('/dashboard/fields');
  }

  getField() {
    this.fieldService.getFieldByIdentifier(this.fieldIdentifier).subscribe(
      (data) => {
        this.fieldId = data.id;
        this.fieldForm.controls['name'].setValue(data.name);
        this.fieldForm.controls['faculty'].setValue(data.faculty);
        this.fieldForm.controls['description'].setValue(data.description);
        this.fieldForm.controls['benefits'].setValue(data.benefits);
        this.fieldForm.controls['file'].setValue(data.imageUrn);

        this.selectedFile = data.imageUrn;
      },
      (error) => {
        this.router.navigateByUrl('/dashboard/fields');
      }
    );
  }

  upload(event: any) {
    this.selectedFile = event.target.files[0].name;
  }

  saveField() {
    this.submitted = true;

    if (this.fieldForm.invalid) {
      return;
    }

    let fieldPayload = {
      name: this.fieldForm.get('name')?.value,
      faculty: this.fieldForm.get('faculty')?.value,
      description: this.fieldForm.get('description')?.value,
      benefits: this.fieldForm.get('benefits')?.value,
      identifier: getIdentifier(this.fieldForm.get('name')?.value),
      imageUrn: this.selectedFile
    };

    if (this.fieldIdentifier !== undefined) {
      this.fieldService.updateField(this.fieldId, fieldPayload).subscribe(
        () => {
          this.router.navigateByUrl('/dashboard/fields');
        },
        (error) => {
          throwError(error);
        }
      );
    } else {
      this.fieldService.createField(fieldPayload).subscribe(
        () => {
          this.router.navigateByUrl('/dashboard/fields');
        },
        (error) => {
          throwError(error);
        }
      );
    }
  }
}

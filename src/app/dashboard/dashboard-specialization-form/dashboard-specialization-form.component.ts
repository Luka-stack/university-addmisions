import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';

import { FieldService } from 'src/app/services/field/field.service';
import { SpecializationService } from 'src/app/services/specialization/specialization.service';
import { FieldModel } from 'src/app/shared/model/field.model';
import { getIdentifier, reverseIdentifier } from "../../utilities/helpers";

@Component({
  selector: 'app-dashboard-specialization-form',
  templateUrl: './dashboard-specialization-form.component.html',
  styleUrls: ['./dashboard-specialization-form.component.css'],
})
export class DashboardSpecializationFormComponent implements OnInit {
  specIdentifier: string;
  specId: number;
  specForm!: FormGroup;
  submitted = false;
  fields: Array<FieldModel>;

  getIdentifier = getIdentifier;
  reverseIdentifier = reverseIdentifier;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private specService: SpecializationService,
    private fieldService: FieldService
  ) {
    this.specIdentifier = this.activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.specForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      knowledge: new FormControl('', [Validators.required]),
      jobs: new FormControl('', [Validators.required]),
      field: new FormControl('', [Validators.required]),
    });

    if (this.specIdentifier !== undefined) {
      this.getSpecialization();
    }

    this.getFields();
  }

  get f() {
    return this.specForm.controls;
  }

  getSpecialization() {
    this.specService
      .getSpecializationByIdentifier(this.specIdentifier)
      .subscribe(
        (data) => {
          this.specId = data.id;
          this.specForm.controls['name'].setValue(data.name);
          this.specForm.controls['description'].setValue(data.description);
          this.specForm.controls['knowledge'].setValue(data.knowledge);
          this.specForm.controls['jobs'].setValue(data.jobs);
          this.specForm.controls['field'].setValue(data.field);
        },
        () => {
          this.router.navigateByUrl('/dashboard/specializations');
        }
      );
  }

  getFields() {
    this.fieldService.getFields().subscribe(
      (data) => {
        this.fields = data;
      }
    );
  }

  saveSpecialization() {
    this.submitted = true;

    if (this.specForm.invalid) {
      return;
    }

    let specPayload = {
      name: this.specForm.get('name')?.value,
      knowledge: this.specForm.get('knowledge')?.value,
      description: this.specForm.get('description')?.value,
      jobs: this.specForm.get('jobs')?.value,
      field: this.specForm.get('field')?.value,
      identifier: getIdentifier(this.specForm.get('name')?.value),
    };

    if (this.specIdentifier !== undefined) {
      this.specService.updateSpecialization(this.specId, specPayload).subscribe(
        () => {
          this.router.navigateByUrl('/dashboard/specializations');
        },
        (error) => {
          throwError(error);
        }
      );
    } else {
      this.specService.createSpecialization(specPayload).subscribe(
        () => {
          this.router.navigateByUrl('/dashboard/specializations');
        },
        (error) => {
          throwError(error);
        }
      );
    }
  }

  onBackClick() {
    this.router.navigateByUrl('/dashboard/specializations');
  }
}

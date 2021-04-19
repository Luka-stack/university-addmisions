import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdmissionService } from 'src/app/services/admission/admission.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-dashboard-admission-form',
  templateUrl: './dashboard-admission-form.component.html',
  styleUrls: ['./dashboard-admission-form.component.css']
})
export class DashboardAdmissionFormComponent implements OnInit {

  admissionId: number;
  admissionForm!: FormGroup;
  submitted = false;

  constructor(private router: Router, private activateRoute: ActivatedRoute,
              private admissionService: AdmissionService) {
    this.admissionId = this.activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.admissionForm = new FormGroup({
      field: new FormControl('', [Validators.required]),
      faculty: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      lecturersPlace: new FormControl('', [Validators.required]),
      submissionPlace: new FormControl('', [Validators.required]),
      requirements: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      capacity: new FormControl('', [Validators.required])
    });

    if (this.admissionId !== undefined) {
      this.getAdmission();
    }
  }

  get f() { return this.admissionForm.controls; }

  onBackClick() {
    this.router.navigateByUrl("/dashboard/admissions");
  }

  getAdmission() {
    this.admissionService.getSubmissionById(this.admissionId).subscribe( data => {

      let month = data.startDate[1] > 9 ? data.startDate[1] : "0"+ data.startDate[1];
      let day = data.startDate[2] > 9 ? data.startDate[2] : "0"+ data.startDate[2];
      let date = data.startDate[0] +"-"+ month +"-"+ day;
      this.admissionForm.controls["startDate"].setValue(date);

      month = data.endDate[1] > 9 ? data.endDate[1] : "0"+ data.endDate[1];
      day = data.endDate[2] > 9 ? data.endDate[2] : "0"+ data.endDate[2];
      date = data.endDate[0] +"-"+ month +"-"+ day;
      this.admissionForm.controls["endDate"].setValue(date);

      this.admissionForm.controls["capacity"].setValue(data.capacity);
      this.admissionForm.controls["field"].setValue(data.field);
      this.admissionForm.controls["faculty"].setValue(data.faculty);
      this.admissionForm.controls["lecturersPlace"].setValue(data.lecturersPlace);
      this.admissionForm.controls["submissionPlace"].setValue(data.submissionPlace);
      this.admissionForm.controls["requirements"].setValue(data.submissionPlace);
      this.admissionForm.controls["description"].setValue(data.submissionPlace);
    }, error => {
      this.router.navigateByUrl("/dashboard/admissions");
    })
  }

  saveAdmission() {
    this.submitted = true;

    if (this.admissionForm.invalid) {
      return;
    }

    let admissionPayload = {
      field: this.admissionForm.get('field')?.value,
      faculty: this.admissionForm.get('faculty')?.value,
      startDate: this.admissionForm.get('startDate')?.value,
      endDate: this.admissionForm.get('endDate')?.value,
      lecturersPlace: this.admissionForm.get('lecturersPlace')?.value,
      submissionPlace: this.admissionForm.get('submissionPlace')?.value,
      requirements: this.admissionForm.get('requirements')?.value,
      description: this.admissionForm.get('description')?.value,
      capacity: this.admissionForm.get('capacity')?.value,
    };

    if (this.admissionId !== undefined) {
      this.admissionService.updateAdmission(this.admissionId, admissionPayload).subscribe(() => {
        this.router.navigateByUrl('/dashboard/admissions');
      }, error => {
        throwError(error);
      });
    }
    else {
      this.admissionService.createAdmission(admissionPayload).subscribe(() => {
        this.router.navigateByUrl('/dashboard/admissions');
      }, error => {
        throwError(error);
      });
    }
  }
}

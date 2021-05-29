import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { throwError } from 'rxjs';

import { AdmissionModel } from '../shared/model/admission.model';
import { AdmissionService } from '../services/admission/admission.service';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css'],
})
export class AdmissionComponent implements OnInit {
  admissions: Array<AdmissionModel>;
  faPlus = faPlus;

  constructor(private admissionService: AdmissionService) {
    this.getAdmissions();
  }

  ngOnInit(): void {}

  getAdmissions() {
    this.admissionService.getAdmissions().subscribe(
      (data) => {
        this.admissions = data;
        console.log(this.admissions);
      },
      (error) => {
        throwError(error);
      }
    );
  }
}

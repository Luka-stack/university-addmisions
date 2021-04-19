import { Component, OnInit } from '@angular/core';
import { AdmissionModel } from '../shared/model/admission.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { AdmissionService } from '../services/admission/admission.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  admissions: Array<AdmissionModel>;
  faPlus = faPlus;

  constructor(private admissionService: AdmissionService) {  }

  ngOnInit(): void {
    this.getAdmissions();
  }

  getAdmissions() {
    this.admissionService.getAllAdmissions().subscribe(data => {
      this.admissions = data;
    }, error => {
      throwError(console.error());
    });
  }
}
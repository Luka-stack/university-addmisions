import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AdmissionService } from 'src/app/services/admission/admission.service';
import { AdmissionModel } from 'src/app/shared/model/admission.model';

@Component({
  selector: 'app-dashboard-admissions',
  templateUrl: './dashboard-admissions.component.html',
  styleUrls: ['./dashboard-admissions.component.css']
})
export class DashboardAdmissionsComponent implements OnInit {

  selectedId: number = -1;
  selected = false;
  admissions: Array<AdmissionModel>;

  constructor(private router: Router, private admissionService: AdmissionService) {    
    this.getAllAdmissions();
  }

  ngOnInit(): void {}

  rowClicked(index: number): void {
    this.selectedId = index;
    this.selected = true;
  }

  deleteAdmission() {
    this.admissionService.deleteAdmission(this.selectedId).subscribe(data => {
      this.getAllAdmissions();
    }, error => {
      throwError(error);
    });
  }

  editAdmission() {
    this.router.navigateByUrl("/dashboard/admissions/" + this.selectedId);
  }

  getAllAdmissions(): void {
    this.admissionService.getAllAdmissions().subscribe(data => {
      this.admissions = data;
    });
  }
}

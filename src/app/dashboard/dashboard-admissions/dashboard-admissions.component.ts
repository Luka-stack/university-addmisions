import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import { AdmissionService } from 'src/app/services/admission/admission.service';
import { AdmissionModel } from 'src/app/shared/model/admission.model';
import { mapFaculty, reverseIdentifier } from '../../utilities/helpers';

@Component({
  selector: 'app-dashboard-admissions',
  templateUrl: './dashboard-admissions.component.html',
  styleUrls: ['./dashboard-admissions.component.css'],
})
export class DashboardAdmissionsComponent implements OnInit {
  faWindowClose = faWindowClose;

  selectedId: number = -1;
  selected = false;
  preview = false;
  admissions: Array<AdmissionModel>;
  
  mapFaculty = mapFaculty;
  reverseIdentifier = reverseIdentifier;

  constructor(
    private router: Router,
    private admissionService: AdmissionService
  ) {
    this.getAdmissions();
  }

  ngOnInit(): void {
    
  }

  rowClicked(index: number): void {
    this.selectedId = index;
    this.selected = true;
  }

  deleteAdmission() {
    this.admissionService.deleteAdmission(this.selectedId).subscribe(
      (data) => {
        this.getAdmissions();
      },
      (error) => {
        throwError(error);
      }
    );
  }

  editAdmission() {
    this.router.navigateByUrl('/dashboard/admissions/' + this.selectedId);
  }

  getAdmissions(): void {
    this.admissionService.getAdmissions().subscribe((data) => {
      this.admissions = data;
      console.log(this.admissions)
    });
  }

  showPreview() {
    this.preview = true;
  }

  closePreview() {
    this.preview = false;
  }
}

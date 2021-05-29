import { Component, OnInit } from '@angular/core';
import {
  faUserGraduate,
  faLaptopCode,
  faMicroscope,
} from '@fortawesome/free-solid-svg-icons';

import { DataHelper } from 'src/app/utilities/datehelper';
import { FieldService } from 'src/app/services/field/field.service';
import { AdmissionService } from 'src/app/services/admission/admission.service';
import { SpecializationService } from 'src/app/services/specialization/specialization.service';

@Component({
  selector: 'app-dashboard-dashboard',
  templateUrl: './dashboard-dashboard.component.html',
  styleUrls: ['./dashboard-dashboard.component.css'],
})
export class DashboardDashboardComponent implements OnInit {
  admissionsIcon = faUserGraduate;
  fieldsIcon = faLaptopCode;
  specializationsIcon = faMicroscope;
  
  fields: number = 0;
  specs: number = 0;
  admissions: number = 0;

  constructor(
    private fieldService: FieldService,
    private admissionService: AdmissionService,
    private specService: SpecializationService
  ) {
    this.getCurrentNumbers();
  }

  ngOnInit(): void {}

  getCurrentNumbers() {
    this.fieldService.getFields().subscribe( data => {
      this.fields = data.length;
    });

    this.admissionService.getAdmissions().subscribe( data => {
      this.admissions = data.length;
    });

    this.specService.getSpecializations().subscribe( data => {
      this.specs = data.length;
    });
  }

  getCurrentDate(): string {
    return (
      DataHelper.getCurrentFormatedDate() +
      ', ' +
      DataHelper.getCurrentQuarter() +
      ' kwartał roku'
    );
  }
}

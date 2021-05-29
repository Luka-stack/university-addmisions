import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

import { SpecializationService } from 'src/app/services/specialization/specialization.service';
import { SpecializationModel } from 'src/app/shared/model/specialization.model';
import { reverseIdentifier } from '../../utilities/helpers';

@Component({
  selector: 'app-dashboard-specializations',
  templateUrl: './dashboard-specializations.component.html',
  styleUrls: ['./dashboard-specializations.component.css'],
})
export class DashboardSpecializationsComponent implements OnInit {
  selectedId: number = -1;
  selected = false;
  specializations: Array<SpecializationModel>;

  reverseIdentifier = reverseIdentifier;

  constructor(
    private router: Router,
    private specService: SpecializationService
  ) {
    this.getSpecializations();
  }

  ngOnInit(): void {}

  getSpecializations() {
    this.specService.getSpecializations().subscribe((data) => {
      this.specializations = data;
    });
  }

  rowClicked(index: number): void {
    this.selectedId = index;
    this.selected = true;
  }

  editSpecialization() {
    this.router.navigateByUrl(
      '/dashboard/specializations/' +
        this.specializations[this.selectedId - 1].identifier
    );
  }

  deleteSpecialization() {
    this.specService.deleteSpecialization(this.selectedId).subscribe(
      () => {
        this.getSpecializations();
      },
      (error) => {
        throwError(error);
      }
    );
  }
}

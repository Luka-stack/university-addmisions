import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SpecializationService } from '../services/specialization/specialization.service';
import { SpecializationModel } from '../shared/model/specialization.model';
import { reverseIdentifier } from '../utilities/helpers';

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.css'],
})
export class SpecializationComponent implements OnInit {
  specialization: SpecializationModel;
  otherSpecialization: Array<SpecializationModel> = [];

  reverseIdentifier = reverseIdentifier;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private specService: SpecializationService
  ) {
    const identifier = this.activateRoute.snapshot.params.name;

    this.getSpecialization(identifier);
  }

  ngOnInit(): void {}

  getSpecialization(identifier: string) {
    this.specService.getSpecializations().subscribe((data) => {
      data.forEach((element: SpecializationModel) => {
        if (element.identifier === identifier) {
          this.specialization = element;
        } else {
          this.otherSpecialization.push(element);
        }
      });

      console.log(this.specialization.knowledge);
    });
  }
}

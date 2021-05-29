import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FieldService } from 'src/app/services/field/field.service';
import { FieldModel } from '../../shared/model/field.model';
import { mapFaculty, reverseIdentifier } from "../../utilities/helpers";

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  logoName: string;
  field: FieldModel;

  mapFaculty = mapFaculty;
  reverseIdentifier = reverseIdentifier;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private fieldService: FieldService) {
    let identifier = this.activateRoute.snapshot.params.name;

    this.getField(identifier);
  }

  ngOnInit(): void {
  }

  getField(identifier: string) {
    this.fieldService.getFieldByIdentifier(identifier).subscribe(data => {
      this.field = data;
    }, () => {
      this.router.navigateByUrl('/fields');
    });
  }

  goToSpecialization(specName: string) {
    this.router.navigateByUrl('/specializations/'+ specName);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FieldModel } from 'src/app/shared/model/field.model';
import { reverseIdentifier } from '../../utilities/helpers';

@Component({
  selector: 'app-field-card',
  templateUrl: './field-card.component.html',
  styleUrls: ['./field-card.component.css']
})
export class FieldCardComponent implements OnInit {

  @Input() field: FieldModel;
  logoName: string;

  reverseIdentifier = reverseIdentifier;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToField() {
    this.router.navigate(['/fields', this.field.identifier]);
  }
}

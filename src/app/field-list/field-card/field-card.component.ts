import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FieldModel } from 'src/app/shared/model/field.model';

@Component({
  selector: 'app-field-card',
  templateUrl: './field-card.component.html',
  styleUrls: ['./field-card.component.css']
})
export class FieldCardComponent implements OnInit {

  @Input() field: FieldModel;
  logoName: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    let name = this.field.name.toLocaleLowerCase();

    if (name === "automatyka i robotyka") {
      this.logoName = "robotics-logo.png";
    }
    else if (name === "biznes elektroniczny") {
      this.logoName = "ecommerce-logo.png";
    }
    else if (name === "elektrotechnika") {
      this.logoName = "electrotechnic-logo.png";
    }
    else if (name === "informatyka") {
      this.logoName = "computer-science-logo.png";
    }
  }

  goToField() {
    this.router.navigate(['/fields', this.getFieldLink(this.field.name)]);
  }

  getFieldLink(fieldName: string) {
    return fieldName.toLowerCase().replace(/\s/g, '-');
  }
}

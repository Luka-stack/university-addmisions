import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FieldService } from '../services/field/field.service';
import { FieldModel } from '../shared/model/field.model';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.css'],
})
export class FieldListComponent implements OnInit {
  fields: Array<FieldModel>;

  constructor(private fieldService: FieldService) {
    this.getFields();
  }

  ngOnInit(): void {}

  getFields() {
    this.fieldService.getFields().subscribe((data) => {
      this.fields = data;
    });
  }
}

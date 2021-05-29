import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

import { FieldService } from 'src/app/services/field/field.service';
import { FieldModel } from 'src/app/shared/model/field.model';
import { mapFaculty, reverseIdentifier } from '../../utilities/helpers';

@Component({
  selector: 'app-dashboard-fields',
  templateUrl: './dashboard-fields.component.html',
  styleUrls: ['./dashboard-fields.component.css'],
})
export class DashboardFieldsComponent implements OnInit {
  selectedId: number = -1;
  selected = false;
  preview = false;
  fields: Array<FieldModel>;

  mapFaculty = mapFaculty;
  reverseIdentifier = reverseIdentifier;

  constructor(private router: Router, private fieldService: FieldService) {
    this.getFields();
  }

  ngOnInit(): void {}

  rowClicked(index: number): void {
    this.selectedId = index;
    this.selected = true;
  }

  private getFields() {
    this.fieldService.getFields().subscribe((data) => {
      this.fields = data;
      console.log(this.fields);
    });
  }

  editField() {
    this.router.navigateByUrl(
      '/dashboard/fields/' + this.fields[this.selectedId - 1].identifier
    );
  }

  deleteField() {
    this.fieldService.deleteField(this.selectedId).subscribe(
      () => {
        this.getFields();
      },
      (error) => {
        throwError(error);
      }
    );
  }

  showPreview() {
    this.preview = true;
  }

  closePreview() {
    this.preview = false;
  }
}

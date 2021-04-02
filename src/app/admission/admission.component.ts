import { Component, OnInit } from '@angular/core';
import { AdmissionModel } from '../shared/model/admission.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {

  admissions: Array<AdmissionModel>;
  faPlus = faPlus;

  constructor() {
    this.admissions = [
      {
        "id": 1,
        "field": "Elektromechanika",
        "faculty": "Informatyki, Elektroniki i Automatyki",
        "capacity": 1000,
        "lecturersPlace": "Example Street 1",
        "submissionPlace": "Example Street 1",
        "startDate": new Date("2020-01-01"),
        "endDate": new Date("2020-02-01"),
        "requirements": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dignissimos minima voluptatibus harum nisi excepturi corrupti labore facilis, vitae voluptates.",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dignissimos minima voluptatibus harum nisi excepturi corrupti labore facilis, vitae voluptates."
      },
      {
        "id": 2,
        "field": "Example Field 2",
        "faculty": "Example Faculty 2",
        "capacity": 600,
        "lecturersPlace": "Example Street 2",
        "submissionPlace": "Example Street 2",
        "startDate": new Date("2020-05-01"),
        "endDate": new Date("2020-08-01"),
        "requirements": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dignissimos minima voluptatibus harum nisi excepturi corrupti labore facilis, vitae voluptates.",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dignissimos minima voluptatibus harum nisi excepturi corrupti labore facilis, vitae voluptates."
      }
    ];
  }

  ngOnInit(): void {
    
  }

}
import { Component, OnInit } from '@angular/core';
import { DataHelper } from 'src/app/utilities/datehelper';
import { faUserGraduate, faLaptopCode, faMicroscope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-dashboard',
  templateUrl: './dashboard-dashboard.component.html',
  styleUrls: ['./dashboard-dashboard.component.css']
})
export class DashboardDashboardComponent implements OnInit {

  admissionsIcon = faUserGraduate;
  fieldsIcon = faLaptopCode;
  specializationsIcon = faMicroscope;

  constructor() { }

  ngOnInit(): void {
  }

  getCurrentDate(): string {
    return DataHelper.getCurrentFormatedDate() +", "+ DataHelper.getCurrentQuarter() +" kwartał roku";
  }
}

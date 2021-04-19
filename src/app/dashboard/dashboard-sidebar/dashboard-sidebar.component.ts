import { Component, OnInit } from '@angular/core';
import { faUserGraduate, faUser, faLaptopCode, faMicroscope, faTable, faThList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent implements OnInit {

  admissionsIcon = faUserGraduate;
  fieldsIcon = faLaptopCode;
  specializationsIcon = faMicroscope;
  profileIcon = faUser;
  dashboardIcon = faTable;
  toggleIcon = faThList;

  constructor() { }

  ngOnInit(): void {
  }

}

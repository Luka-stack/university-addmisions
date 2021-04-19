import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-specialization-form',
  templateUrl: './dashboard-specialization-form.component.html',
  styleUrls: ['./dashboard-specialization-form.component.css']
})
export class DashboardSpecializationFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBackClick() {
    this.router.navigateByUrl("/dashboard/admissions");
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-field-form',
  templateUrl: './dashboard-field-form.component.html',
  styleUrls: ['./dashboard-field-form.component.css']
})
export class DashboardFieldFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBackClick() {
    this.router.navigateByUrl("/dashboard/admissions");
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page-header',
  templateUrl: './dashboard-page-header.component.html',
  styleUrls: ['./dashboard-page-header.component.css']
})
export class DashboardPageHeaderComponent implements OnInit {

  @Input() title: String;
  @Input() amount: number;

  constructor() { }

  ngOnInit(): void {
  }

}

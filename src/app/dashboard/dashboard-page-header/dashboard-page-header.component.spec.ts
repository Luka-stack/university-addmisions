import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageHeaderComponent } from './dashboard-page-header.component';

describe('DashboardPageHeaderComponent', () => {
  let component: DashboardPageHeaderComponent;
  let fixture: ComponentFixture<DashboardPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
